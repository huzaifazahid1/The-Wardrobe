const nodemailer = require("nodemailer");

async function sendEmail({
    senderEmail,
    senderAppPassword,
    receiverEmail,
    subject = "No Subject", // Default subject
    text = "", // Default text content
    html = "", // Optionally send HTML content
    host = "smtp.gmail.com",
    port = 587,
    secure = false,
  }) {

    // Create transporter with customizable host, port, and security options
    let transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: senderEmail,
        pass: senderAppPassword,
      },
    });

    // Email options with optional HTML content
    const mailOptions = {
      from: `"Wardrobe" <${senderEmail}>`,
      to: receiverEmail,
      subject,
      text,
      html,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      console.log("Message ID:", info.messageId);
      return info;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  }

  sendEmail({
    senderEmail: "hamdankhubaib959@gmail.com",
    senderAppPassword: "zgva jbnl bnzs qehz",
    receiverEmail: "K.alam93899@gmail.com",
    subject: "Your OTP Code",
    text: "Here is your OTP: 123456",
    html: "<h1>Your OTP: 123456</h1>", // Optional HTML version
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
  });
  