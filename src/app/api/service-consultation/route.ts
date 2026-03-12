import { NextResponse } from 'next/server';
import { sendEmail, DESTINATION_EMAIL } from '@/lib/nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get('email') as string;
    const projectDetails = formData.get('projectDetails') as string;
    const serviceTitle = formData.get('serviceTitle') as string;

    if (!email || !projectDetails) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="background-color: #0d47a1; padding: 25px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px;">Service Consultation Request</h2>
          <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Webronic Portfolio</p>
        </div>
        <div style="padding: 30px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; width: 35%; color: #0d47a1; font-size: 14px;"><strong>Interested Service:</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 15px;">${serviceTitle || "General Service"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0d47a1; font-size: 14px;"><strong>Email:</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 15px;">
                <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="margin-bottom: 10px; font-weight: bold; color: #0d47a1; font-size: 14px;">Project Details:</p>
            <div style="background-color: #fcfcfc; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px; color: #333; line-height: 1.6;">
              ${projectDetails.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      </div>
    `;

    const result = await sendEmail({
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `📝 Consultation Request: ${serviceTitle || "General Service"}`,
      htmlContent,
    });

    if (!result.success) {
      return NextResponse.json({
        success: false,
        message: "Failed to send email",
        debug: result.error
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      debug: result.info
    });
  } catch (error: any) {
    console.error("Error in /api/service-consultation:", error);
    return NextResponse.json({ success: false, message: "Server error: " + error.message, debug: error.message }, { status: 500 });
  }
}
