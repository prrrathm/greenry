import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
	try {
		const {
			name,
			email,
			phone,
			company,
			spaceType,
			preferredDate,
			preferredTime,
			message,
		} = await req.json();

		// Configure transporter
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		// Admin email with client details in a table
		const adminHtml = `
			<div style="font-family: Arial, sans-serif; padding:20px; background:#f9f9f9;">
				<div style="max-width:700px;margin:auto;border-radius:12px;overflow:hidden;
					border:1px solid #eee;background:#fff;">
					<div style="background:#418833;color:#fff;padding:20px;font-size:20px;font-weight:bold;">
						New Consultation Booking
					</div>
					<div style="padding:20px;">
						<table style="width:100%;border-collapse:collapse;">
							<tr>
								<td style="padding:10px;border:1px solid #ddd;"><b>Name</b></td>
								<td style="padding:10px;border:1px solid #ddd;">${name}</td>
							</tr>
							<tr>
								<td style="padding:10px;border:1px solid #ddd;"><b>Email</b></td>
								<td style="padding:10px;border:1px solid #ddd;">${email}</td>
							</tr>
							<tr>
								<td style="padding:10px;border:1px solid #ddd;"><b>Phone</b></td>
								<td style="padding:10px;border:1px solid #ddd;">${phone}</td>
							</tr>
							<tr>
								<td style="padding:10px;border:1px solid #ddd;"><b>Company</b></td>
								<td style="padding:10px;border:1px solid #ddd;">${company || "-"}</td>
							</tr>
							<tr>
								<td style="padding:10px;border:1px solid #ddd;"><b>Space Type</b></td>
								<td style="padding:10px;border:1px solid #ddd;">${spaceType}</td>
							</tr>
							<tr>
								<td style="padding:10px;border:1px solid #ddd;"><b>Preferred Date</b></td>
								<td style="padding:10px;border:1px solid #ddd;">${preferredDate || "-"}</td>
							</tr>
							<tr>
								<td style="padding:10px;border:1px solid #ddd;"><b>Preferred Time</b></td>
								<td style="padding:10px;border:1px solid #ddd;">${preferredTime || "-"}</td>
							</tr>
							<tr>
								<td style="padding:10px;border:1px solid #ddd;vertical-align:top;"><b>Message</b></td>
								<td style="padding:10px;border:1px solid #ddd;">${message || "-"}</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		`;

		// User confirmation email
		const userHtml = `
			<div style="font-family: Arial, sans-serif; padding:20px; background:#f9f9f9;">
				<div style="max-width:600px;margin:auto;border-radius:12px;overflow:hidden;
					border:1px solid #eee;background:#fff;">
					<div style="background:#418833;color:#fff;padding:20px;font-size:20px;font-weight:bold;">
						Thank You for Reaching Out!
					</div>
					<div style="padding:20px;">
						<p>Hi ${name},</p>
						<p>Thank you for booking a free consultation with us. Our team will reach out to you soon to confirm the details.</p>
						<p style="margin-top:20px;">Best regards,<br/>Evergreenry Team 🌿</p>
					</div>
				</div>
			</div>
		`;

		// Send admin email
		await transporter.sendMail({
			from: `"Website Booking" <${process.env.SMTP_USER}>`,
			to: process.env.ADMIN_EMAIL, // Admin email
			subject: "New Consultation Booking",
			html: adminHtml,
		});

		// Send confirmation to user
		await transporter.sendMail({
			from: `"Evergreenry" <${process.env.SMTP_USER}>`,
			to: email,
			subject: "Thank you for booking your consultation",
			html: userHtml,
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
