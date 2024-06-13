import { client } from "@/postmark/postmark";

export async function POST(request: Request){
    const res = await request.json();
    const {subject, body} = res;
    
    client.sendEmailWithTemplate({
        "TemplateId": 36255712,
        "From": 'trackonequipe@trackon.ao',
        "To": 'trackonequipe@trackon.ao',
        // "Subject": subject,
        // "TextBody": body
        "TemplateModel":{
            "name": subject,
            "body": body
        }
    })

    return Response.json({res})
}