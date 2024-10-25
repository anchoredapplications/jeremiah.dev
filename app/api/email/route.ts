import { sendEmail } from '@/server/gateway/email';
import config from '@/config.json';
import { ContactFormSchemaType } from '@/types/contact';
import { NextRequest, NextResponse } from 'next/server'
import { getDictionary } from '@/dictionaries';

export async function POST(request: NextRequest) { 
    const $t = getDictionary();

    const contactFormData: ContactFormSchemaType =  await request.json();
    const token: string | null  = request.headers.get("token");
    
    // Verify CAPTCHA    
    const captchaResponse = await fetch(`${config.captcha}?key=${process.env.CAPTCHA_API_KEY}`, {
        method: 'POST',
        body: JSON.stringify({
            "event": {
              "token": `${token}`,
              "expectedAction": "submit",
              "siteKey": `${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`,
            }
        })
    });

    const captchaPayload = await captchaResponse.json();

    if (captchaPayload?.tokenProperties?.valid) {
        const response = await sendEmail(contactFormData)
        return NextResponse.json(response);
    } else {
        return NextResponse.json({ success: false, message: $t.contact.captchaFailed});
    }
}