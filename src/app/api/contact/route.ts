import { NextResponse } from 'next/server';
import { sendEmail, DESTINATION_EMAIL } from '@/lib/nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const requirementType = formData.get('requirementType') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="background-color: #0d47a1; padding: 25px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Enquiry</h2>
          <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Webronic Portfolio</p>
        </div>
        <div style="padding: 30px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; width: 35%; color: #0d47a1; font-size: 14px;"><strong>Name:</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0d47a1; font-size: 14px;"><strong>Email:</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 15px;">
                <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0d47a1; font-size: 14px;"><strong>Requirement Type:</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 15px;">${requirementType || "N/A"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="margin-bottom: 10px; font-weight: bold; color: #0d47a1; font-size: 14px;">Message:</p>
            <div style="background-color: #fcfcfc; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px; color: #333; line-height: 1.6;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      </div>
    `;

    const result = await sendEmail({
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `📢 New Enquiry from ${name}`,
      htmlContent,
    });

    // If transporter.sendMail threw an error, result.success is false
    if (!result.success) {
      return NextResponse.json({
        success: false,
        message: "Failed to send email",
        debug: result.error
      }, { status: 500 });
    }

    // Even if it succeeds, return the SMTP debug info to the browser
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      debug: result.info
    });
  } catch (error: any) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json({ success: false, message: "Server error: " + error.message, debug: error.message }, { status: 500 });
  }
}
