import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "mail.webronic.com",
    port: 465,
    secure: true,
    auth: {
        user: "no-reply@webronic.com",
        pass: "0i%*k)9o?+gM",
    },
});

// Switch destination to the custom domain to avoid Gmail's strict SPF/DKIM blocklist
export const DESTINATION_EMAIL = "contact@webronic.com";

interface EmailParams {
    to: string;
    replyTo: string;
    subject: string;
    htmlContent: string;
}

export async function sendEmail({ to, replyTo, subject, htmlContent }: EmailParams) {
    try {
        const info = await transporter.sendMail({
            from: '"Webronic Portfolio" <no-reply@webronic.com>',
            to,
            replyTo,
            subject,
            html: htmlContent,
        });

        console.log("-----------------------------------------");
        console.log("📧 Message ID:", info.messageId);
        console.log("📧 Accepted:", info.accepted);
        console.log("📧 Rejected:", info.rejected);
        console.log("📧 Response:", info.response);
        console.log("-----------------------------------------");

        return {
            success: true,
            info: {
                messageId: info.messageId,
                accepted: info.accepted,
                rejected: info.rejected,
                response: info.response
            }
        };
    } catch (error: any) {
        console.error("❌ SendMail Failed:", error);
        return {
            success: false,
            error: error.message || String(error)
        };
    }
}
