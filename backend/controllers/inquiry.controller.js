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
    const adminResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          email: "aihealthcare.kmc@gmail.com",
          name: "AI Healthcare KMC Website",
        },
        to: [
          {
            email: "aihealthcare.kmc@gmail.com",
            name: "AI Healthcare KMC",
          },
        ],
        replyTo: {
          email: email,
          name: organization,
        },
        subject: "New Inquiry – AI Healthcare KMC",

        // 🔒 ADMIN HTML — UNCHANGED
        htmlContent: `
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
      }),
    });

    if (!adminResponse.ok) {
      const errorData = await adminResponse.json();
      throw new Error(JSON.stringify(errorData));
    }

    /* =========================
       2️⃣ AUTO-REPLY TO USER
       ========================= */
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          email: "aihealthcare.kmc@gmail.com",
          name: "AI Healthcare KMC",
        },
        to: [
          {
            email: email,
            name: organization,
          },
        ],
        subject: "We have received your inquiry – AI Healthcare KMC",
        htmlContent: `
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
        `,
      }),
    });

    return res.status(200).json({
      success: true,
      message: "Inquiry email sent successfully",
    });

  } catch (error) {
    console.error("Brevo API error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send inquiry email",
    });
  }
};
