import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email } = await req.json();
    
    // তোর আসল n8n হ্যাকিং সার্ভার
    const n8nWebhookUrl = "https://rakibbaee.app.n8n.cloud/webhook/email-osint-target"; 

    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "OSINT Server Connection Failed" }, { status: 500 });
  }
}
