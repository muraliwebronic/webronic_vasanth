import { NextResponse } from 'next/server';
import { sendEmail, verifySMTP, DESTINATION_EMAIL } from '@/lib/nodemailer';

export async function POST(req: Request) {
  const routeStart = performance.now();
  const routeName = '/api/project-request';
  console.log(`\n🟢 [${routeName}] ──── REQUEST START ────`);

  try {
    // ── Step 1: Parse form data ──
    const parseStart = performance.now();
    const formData = await req.formData();
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const projectGoals = formData.get('projectGoals') as string;
    const serviceTitle = formData.get('serviceTitle') as string;
    console.log(`⏱️  [${routeName}] Form parse: ${Math.round(performance.now() - parseStart)}ms`);
    console.log(`📋 [${routeName}] Fields: fullName="${fullName}", email="${email}", phone="${phone}", serviceTitle="${serviceTitle}"`);

    if (!fullName || !email || !phone || !projectGoals) {
      console.log(`⚠️  [${routeName}] Missing required fields → 400`);
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    // ── Step 2: Verify SMTP connection ──
    console.log(`🔌 [${routeName}] Verifying SMTP connection...`);
    const smtpCheck = await verifySMTP();
    if (!smtpCheck.ok) {
      console.error(`❌ [${routeName}] SMTP verification failed after ${smtpCheck.durationMs}ms: ${smtpCheck.error}`);
      return NextResponse.json({
        success: false,
        message: "SMTP connection failed",
        debug: { smtpError: smtpCheck.error, smtpVerifyMs: smtpCheck.durationMs }
      }, { status: 503 });
    }
    console.log(`✅ [${routeName}] SMTP verified in ${smtpCheck.durationMs}ms`);

    // ── Step 3: Build HTML ──
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="background-color: #0d47a1; padding: 25px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px;">New Project Request</h2>
          <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Webronic Portfolio</p>
        </div>
        <div style="padding: 30px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; width: 35%; color: #0d47a1; font-size: 14px;"><strong>Service:</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 15px;">${serviceTitle || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0d47a1; font-size: 14px;"><strong>Name:</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 15px;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0d47a1; font-size: 14px;"><strong>Email:</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 15px;">
                <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0d47a1; font-size: 14px;"><strong>Phone:</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 15px;">${phone}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="margin-bottom: 10px; font-weight: bold; color: #0d47a1; font-size: 14px;">Project Goals:</p>
            <div style="background-color: #fcfcfc; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px; color: #333; line-height: 1.6;">
              ${projectGoals.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      </div>
    `;

    // ── Step 4: Send email ──
    console.log(`📧 [${routeName}] Sending email...`);
    const result = await sendEmail({
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `🚀 Start Project Request: ${fullName} - ${serviceTitle || "General"}`,
      htmlContent,
    });

    const totalMs = Math.round(performance.now() - routeStart);

    if (!result.success) {
      console.error(`❌ [${routeName}] Email send failed. Total time: ${totalMs}ms`);
      return NextResponse.json({
        success: false,
        message: "Failed to send email",
        debug: { ...result, totalRouteMs: totalMs, smtpVerifyMs: smtpCheck.durationMs }
      }, { status: 500 });
    }

    console.log(`✅ [${routeName}] Email sent successfully. Total time: ${totalMs}ms`);
    console.log(`🔴 [${routeName}] ──── REQUEST END ────\n`);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      debug: { ...result.info, totalRouteMs: totalMs, smtpVerifyMs: smtpCheck.durationMs }
    });
  } catch (error: any) {
    const totalMs = Math.round(performance.now() - routeStart);
    console.error(`💥 [${routeName}] Unhandled error after ${totalMs}ms:`, error);
    return NextResponse.json({
      success: false,
      message: "Server error: " + error.message,
      debug: { error: error.message, code: error.code, totalRouteMs: totalMs }
    }, { status: 500 });
  }
}
