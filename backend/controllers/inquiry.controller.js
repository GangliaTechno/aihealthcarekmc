import transporter from "../config/mailer.js";

export const sendInquiry = async (req, res) => {
  const { email, phone, organization, collaborationType, message } = req.body;

  // Basic validation
  if (!email || !organization || !collaborationType || !message) {
    return res.status(400).json({
      success: false,
      message: "Required fields are missing",
    });
  }

  try {
    /* =========================
       1️⃣ ADMIN NOTIFICATION
       ========================= */
    await transporter.sendMail({
      // Authenticated Gmail sender
      from: `"AI Healthcare KMC Website" <${process.env.SMTP_USER}>`,

      // Send inquiry to admin inbox
      to: "aihealthcare.kmc@gmail.com",

      // Replies go to the user
      replyTo: email,

      subject: "New Inquiry – AI Healthcare KMC",

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333; text-align: center;">New Inquiry Received</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 40%; color: #555;">Email Address:</td>
              <td style="padding: 10px; color: #333;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555;">Phone Number:</td>
              <td style="padding: 10px; color: #333;">${phone || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555;">Organization:</td>
              <td style="padding: 10px; color: #333;">${organization}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555;">Collaboration Type:</td>
              <td style="padding: 10px; color: #333;">${collaborationType}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p style="font-weight: bold; color: #555; margin-bottom: 5px;">Message:</p>
            <p style="color: #333; line-height: 1.6;">${message}</p>
          </div>

          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #999;">
            <p>This email was sent from the AI Healthcare KMC website contact form.</p>
          </div>
        </div>
      `,
    });

    /* =========================
       2️⃣ AUTO-REPLY TO USER
       ========================= */
    await transporter.sendMail({
      from: `"AI Healthcare KMC" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We have received your inquiry – AI Healthcare KMC",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <p>Dear ${organization},</p>

          <p>
            Thank you for contacting <strong>AI Healthcare KMC</strong>.
            We have successfully received your inquiry.
          </p>

          <p>
            Our team will review your message and get back to you shortly.
          </p>

          <p><strong>Your message:</strong></p>
          <blockquote style="background:#f5f5f5; padding:10px; border-left:4px solid #ff5722;">
            ${message}
          </blockquote>

          <p>
            Best regards,<br />
            <strong>AI Healthcare KMC Team</strong><br />
            Kasturba Medical College, Manipal
          </p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Inquiry email sent successfully",
    });
  } catch (error) {
    console.error("Error sending inquiry email:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send inquiry email",
      error: error.message,
    });
  }
};
