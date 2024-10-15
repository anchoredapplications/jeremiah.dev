"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { ContactFormSchema, ContactFormSchemaType } from "@/types/contact"
 
export function ContactForm() {
    const $t = getDictionary();

    const form = useForm<ContactFormSchemaType>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            email: "",
            subject: "",
            body: ""
        },
    })
    function onSubmit(values: ContactFormSchemaType) {
        //hit email route
        console.log(values)
    }

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
                <Button type="submit" className="w-full md:w-1/2">{$t.contact.button.label}</Button>
            </form>
        </Form>
    )
}