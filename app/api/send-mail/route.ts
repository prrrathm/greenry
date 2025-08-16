import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
	try {
		const { name, email, message } = await req.json();

		// Configure transporter (use real SMTP credentials)
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		// Email template
		const html = `
      <div style="font-family: Arial, sans-serif; padding:20px; background:#f9f9f9;">
        <div style="max-width:600px;margin:auto;border-radius:12px;overflow:hidden;
          border:1px solid #eee;background:#fff;">
          <div style="background:#26420f;color:#fff;padding:20px;font-size:20px;font-weight:bold;">
            New Contact Message
          </div>
          <div style="padding:20px;background:#d4e0c5;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background:#fff;padding:15px;border-radius:8px;border:1px solid #ccc;">
              ${message}
            </div>
          </div>
        </div>
      </div>
    `;

		await transporter.sendMail({
			from: `"Website Contact" <${process.env.SMTP_USER}>`,
			to: "prrrathm@gmail.com",
			subject: "New Contact Form Submission",
			html,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Email sending error:", error);
		return NextResponse.json(
			{ success: false, error: "Failed to send email" },
			{ status: 500 },
		);
	}
}
