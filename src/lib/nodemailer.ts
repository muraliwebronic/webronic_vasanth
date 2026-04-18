import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "50.116.93.227",
    port: 465,
    secure: true,
    auth: {
        user: "no-reply@webronic.com",
        pass: "0i%*k)9o?+gM",
    },
    // ⏱️ Timeout settings to prevent long hangs
    connectionTimeout: 10000,  // 10s to establish TCP connection
    greetingTimeout: 10000,    // 10s for SMTP greeting
    socketTimeout: 15000,      // 15s for socket inactivity
    // 🔍 Enable SMTP debug logging
    logger: true,
    debug: true,
    tls: {
    rejectUnauthorized: false
  }
});

// Switch destination to the custom domain to avoid Gmail's strict SPF/DKIM blocklist
export const DESTINATION_EMAIL = "contact@webronic.com";

interface EmailParams {
    to: string;
    replyTo: string;
    subject: string;
    htmlContent: string;
}

/**
 * Verify SMTP connection is alive.
 * Returns { ok: true, durationMs } on success, or { ok: false, error, durationMs } on failure.
 */
export async function verifySMTP() {
    const start = performance.now();
    try {
        await transporter.verify();
        const durationMs = Math.round(performance.now() - start);
        console.log(`✅ SMTP verify OK in ${durationMs}ms`);
        return { ok: true, durationMs };
    } catch (error: any) {
        const durationMs = Math.round(performance.now() - start);
        console.error(`❌ SMTP verify FAILED after ${durationMs}ms:`, error.message);
        return { ok: false, error: error.message || String(error), durationMs };
    }
}

export async function sendEmail({ to, replyTo, subject, htmlContent }: EmailParams) {
    const sendStart = performance.now();
    try {
        console.log(`📤 [sendEmail] Starting sendMail to="${to}" subject="${subject}"`);

        const info = await transporter.sendMail({
            from: '"Webronic Portfolio" <no-reply@webronic.com>',
            to,
            replyTo,
            subject,
            html: htmlContent,
        });

        const sendDurationMs = Math.round(performance.now() - sendStart);

        console.log("-----------------------------------------");
        console.log(`📧 Message ID: ${info.messageId}`);
        console.log(`📧 Accepted: ${JSON.stringify(info.accepted)}`);
        console.log(`📧 Rejected: ${JSON.stringify(info.rejected)}`);
        console.log(`📧 Response: ${info.response}`);
        console.log(`⏱️  sendMail took: ${sendDurationMs}ms`);
        console.log("-----------------------------------------");

        return {
            success: true,
            info: {
                messageId: info.messageId,
                accepted: info.accepted,
                rejected: info.rejected,
                response: info.response,
                sendDurationMs,
            }
        };
    } catch (error: any) {
        const sendDurationMs = Math.round(performance.now() - sendStart);
        console.error(`❌ SendMail Failed after ${sendDurationMs}ms:`, error.message);
        console.error(`❌ Error code: ${error.code}`);
        console.error(`❌ Error command: ${error.command}`);
        return {
            success: false,
            error: error.message || String(error),
            errorCode: error.code,
            errorCommand: error.command,
            sendDurationMs,
        };
    }
}
