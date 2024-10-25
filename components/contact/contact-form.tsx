"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { getDictionary } from "@/dictionaries"
import { ContactFormResponse, ContactFormSchema, ContactFormSchemaType } from "@/types/contact"
import config from "@/config.json"
import { useCallback, useState } from "react"
import { useReCaptcha } from "next-recaptcha-v3";
import { cn } from "@/lib/utils"

export function ContactForm() {
    const [timesUsed, setTimesUsed] = useState<number>(-1)
    const [responseMessage, setResponseMessage] = useState<string>()
    const [responseFailed, setResponseFailed] = useState<boolean>()
    const [isDisabled, setIsDisabled] = useState<boolean>()
    const { executeRecaptcha } = useReCaptcha();
    const enableButton = useCallback(()=>{ setIsDisabled(false) }, [setIsDisabled])
    const $t = getDictionary();
    const attemptThreshold = 1; // 2 times

    const form = useForm<ContactFormSchemaType>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            email: "",
            subject: "",
            body: ""
        },
    })
    const onSubmit = useCallback(
        async (values: ContactFormSchemaType) => {
            // Generate ReCaptcha token
            const token = await executeRecaptcha("submit");
            setResponseMessage("")
            setIsDisabled(true)
            try {
                const response = await fetch(config.api.email, {
                    method: 'POST',
                    headers: { token: token },
                    body: JSON.stringify(values),
                })
                const { success, message}: ContactFormResponse = await response.json();
                setResponseMessage(message)
                setResponseFailed(!success)
                form.reset()
            } catch (error) {
                console.error(error)
            } finally {
                setTimesUsed(value => value+1)
                setTimeout(enableButton, 5000*(2^timesUsed))
            }       
        }, [form, enableButton, executeRecaptcha, setResponseMessage, setTimeout, timesUsed, setTimesUsed],
    );
    
    type ContactFormFieldProps = {
        name: "email" | "subject" | "body"
        type: string
        label : string
        description: string
        placeholder: string
    }

    const ContactFormField = ({type, name, label, description, placeholder}: ContactFormFieldProps) => (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="w-full md:w-1/2">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        {
                            type === "textarea" 
                                ? <Textarea placeholder={placeholder} {...field} />
                                : <Input type={type} placeholder={placeholder} {...field} />
                        }
                    </FormControl>
                    <FormDescription>
                        {description}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4 flex flex-col items-center justify-center gap-2">
                <ContactFormField name="email" type="email" label={$t.contact.email.label} placeholder={$t.contact.email.placeholder} description={$t.contact.email.description}/>
                <ContactFormField name="subject" type="string" label={$t.contact.subject.label} placeholder={$t.contact.subject.placeholder} description={$t.contact.subject.description}/>
                <ContactFormField name="body" type="textarea" label={$t.contact.body.label} placeholder={$t.contact.body.placeholder} description={$t.contact.body.description}/>
                <Button disabled={isDisabled} type="submit" className="w-full md:w-1/2">{((timesUsed < attemptThreshold) || !isDisabled) ? $t.contact.button.label : $t.contact.button.pastAttemptThreshold}</Button>
                <div className={cn("flex w-full md:w-1/2 justify-end items-center", responseFailed ? "text-red-600" : "")}>{responseMessage}</div>
            </form>
        </Form>
    )
}