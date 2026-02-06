import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // 🔥 FORCE Gmail SMTP
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
console.log("SMTP USER:", process.env.SMTP_USER);


export default transporter;
