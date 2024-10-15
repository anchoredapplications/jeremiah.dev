import { NextRequest, NextResponse } from 'next/server'
import config from '@/config.json'
import { ContactFormSchemaType } from '@/types/contact';
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

export async function POST(request: NextRequest) { 
    const body = await request.json();
    const data = body.email
    const awsConfig = {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        apiVersion: "2010-12-01",
        region: "us-east-2"
    }
    const params = {
        Destination: {
            ToAddresses: [
                process.env.SES_RECIPIENT_ADDRESS
            ]
        }, 
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8", 
                    Data: data.message
                }
            }, 
            Subject: {
                Charset: "UTF-8", 
                Data: `${config}: ${data.subject}`
            }
        }, 
        ReplyToAddresses: [
            data.email
        ], 
        Source: process.env.SES_SENDER_ADDRESS
    };
    
    const client = new SESClient(awsConfig);
    const send = new SendEmailCommand(params)
    return client.send(send).then(
        (data: ContactFormSchemaType & { $metadata: any}) => {
            if (data.$metadata.httpStatusCode != 200) {
                return NextResponse.json({ message: "Message failed!"});
            } else {
                return NextResponse.json({ message: "Message sent!"});
            }
        }
    )
}