import nodemailer from "nodemailer";
import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL } from "./templates.js";

export const sendVerificationEmail = async (email, verificationCode) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: `${process.env.GMAIL_USER}`,
        pass: `${process.env.GMAIL_PASSWORD}`,
      },
    });

    const response = await transporter.sendMail({
      from: `"Kanbello Support" <${process.env.GMAIL_USER}>`,
      to: `${email}`, // list of receivers
      subject: "Verification code", 
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationCode), // html body
    });
    console.log("Verification email sent successfully");
  } catch (error) {
    console.log("Error sending verification email", error);
    throw new Error("Error sending verification email", error);
  }
};


export const sendWelcomeEmail = async (email, name) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: `${process.env.GMAIL_USER}`,
        pass: `${process.env.GMAIL_PASSWORD}`,
      },
    });

    const response = await transporter.sendMail({
      from: `"Kanbello Support" <${process.env.GMAIL_USER}>`,
      to: `${email}`, // list of receivers
      subject: "Welcome To Kanbello", 
      html:WELCOME_EMAIL
      .replace("{userName}", name)
      .replace("{loginURL}", process.env.LOGIN_URL)
      .replace("{imageSRC}", process.env.CLOUDINARY_IMAGE_URL)
     // html body
    });
    console.log("Verification email sent successfully");
  } catch (error) {
    console.log("Error sending verification email", error);
    throw new Error("Error sending verification email", error);
  }
}