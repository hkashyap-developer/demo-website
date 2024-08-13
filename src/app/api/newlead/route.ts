import { NextResponse } from "next/server";
import { Resend } from 'resend'
import { NetlifyWelcomeEmail } from '../../../components/custom/EmailTemplateTwo'




export async function POST(request:any) {
    

    const resend = new Resend(process.env.RESEND_API_KEY);



    try {

        
        const body = await request.json(); 

        const { firstname } = body; 

        const { data } = await resend.emails.send({
            from: 'Geranos Getaways <onboarding@resend.dev>', 
            to: 'hkashyap.developer@gmail.com', 
            subject: 'Plan A Getaway Request',
            html: '<h1>TESTasdfadf asdfas</h1>', 
            text: 'TEST',
            react: NetlifyWelcomeEmail({firstName: firstname}),
        }); 

        return NextResponse.json({ data });

    } catch (error) {
        return NextResponse.json({error});
    }


}