import nodemailer from "nodemailer";
import dns from "dns";

// 🔥 Force IPv4 (IMPORTANT for Render)
dns.setDefaultResultOrder("ipv4first");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

console.log("SMTP USER:", process.env.SMTP_USER);

export default transporter;
