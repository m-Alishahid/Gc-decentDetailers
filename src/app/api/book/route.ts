// src/app/api/book/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { 
  getUserBookingTemplate, 
  getContactFormTemplate,
  getAdminBookingTemplate 
} from "@/utils/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📥 Incoming body:", JSON.stringify(body, null, 2));

    // ---------------- TRANSPORTER ----------------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ---------------- CONTACT FORM ----------------
    if (body.type === "contact") {
      const adminHtml = getContactFormTemplate(body);

      await transporter.sendMail({
        from: `"Decent Detailers" <${process.env.EMAIL_USER}>`,
        to: "nomanirshad0324@gmail.com", // ✅ admin email
        subject: `📩 New Contact Form Message from ${body.firstName} ${body.lastName}`,
        html: adminHtml,
      });

      return NextResponse.json({ message: "✅ Contact form email sent" });
    }

    // ---------------- BOOKING FORM ----------------
    if (
      body.type === "booking" &&
      body.firstName &&
      body.lastName &&
      body.date &&
      body.timeSlot &&
      body.email
    ) {
      // -------- Customer Email (Confirmation) --------
      const userHtml = getUserBookingTemplate(body);
      await transporter.sendMail({
        from: `"Decent Detailers" <${process.env.EMAIL_USER}>`,
        to: body.email,
        subject: "✅ Booking Confirmation - Decent Detailers",
        html: userHtml,
      });

      // -------- Admin Email (Stylish Template) --------
      const adminHtml = getAdminBookingTemplate(body);
      await transporter.sendMail({
        from: `"Booking System" <${process.env.EMAIL_USER}>`,
        to: "nomanirshad0324@gmail.com", // ✅ admin email
        subject: `🚗 New Booking from ${body.firstName} ${body.lastName}`,
        html: adminHtml,
      });

      return NextResponse.json({ message: "✅ Booking emails sent" });
    }

    // ---------------- INVALID REQUEST ----------------
    return NextResponse.json(
      { message: "❌ Invalid request data" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("❌ Email error:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
