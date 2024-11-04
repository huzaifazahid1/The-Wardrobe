const nodemailer = require("nodemailer");
require('dotenv').config({ path: './.env' });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_APP_PASSWORD,
  },
});

async function sendEmail({
  receiverEmail,
  subject = "No Subject",
  text = "",
  html = "",
  fromName = "No-Reply",
  replyTo,
}) {
  const mailOptions = {
    from: `"${fromName}" <${process.env.SENDER_EMAIL}>`,
    to: receiverEmail,
    subject,
    text,
    html,
    replyTo,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { message: "Email sent successfully", messageId: info.messageId, info };
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
}

module.exports = sendEmail