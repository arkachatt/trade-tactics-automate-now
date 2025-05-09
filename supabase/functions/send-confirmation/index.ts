
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const adminEmail = Deno.env.get("ADMIN_EMAIL");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadSubmission {
  name: string;
  email: string;
  phone: string;
  company?: string;
  strategy?: string;
  message?: string;
  formType: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const submission: LeadSubmission = await req.json();
    console.log("Received submission:", submission);

    // Send confirmation email to the lead
    const userEmailResponse = await resend.emails.send({
      from: "TradeTactics <onboarding@resend.dev>",
      to: [submission.email],
      subject: "Thank you for contacting TradeTactics",
      html: `
        <h1>Thank you for reaching out, ${submission.name}!</h1>
        <p>We've received your inquiry and appreciate your interest in TradeTactics.</p>
        <p>Our team will review your information and get back to you within 24 hours.</p>
        <p>Best regards,<br>The TradeTactics Team</p>
      `,
    });

    console.log("User confirmation email sent:", userEmailResponse);

    // Send notification email to admin
    if (adminEmail) {
      const formTypeText = submission.formType === "hero" ? "Strategy Automation" : 
                          submission.formType === "newsletter" ? "Newsletter Subscription" : "Contact Form";
      
      const adminEmailResponse = await resend.emails.send({
        from: "TradeTactics Leads <onboarding@resend.dev>",
        to: [adminEmail],
        subject: `New Lead: ${submission.name} - ${formTypeText}`,
        html: `
          <h1>New Lead Submission</h1>
          <p><strong>Type:</strong> ${formTypeText}</p>
          <p><strong>Name:</strong> ${submission.name}</p>
          <p><strong>Email:</strong> ${submission.email}</p>
          <p><strong>Phone:</strong> ${submission.phone}</p>
          ${submission.company ? `<p><strong>Company:</strong> ${submission.company}</p>` : ''}
          ${submission.strategy ? `<p><strong>Strategy:</strong> ${submission.strategy}</p>` : ''}
          ${submission.message ? `<p><strong>Message:</strong> ${submission.message}</p>` : ''}
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `,
      });

      console.log("Admin notification email sent:", adminEmailResponse);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.error("Error in send-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
