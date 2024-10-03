import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: `${process.env.GMAIL_USER}`,
        pass: `${process.env.GMAIL_PASSWORD}`,
      },
    });

    const response = await transporter.sendMail({
      from: `${process.env.GMAIL_USER}`,
      to: `${email}`, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Verification email sent successfully");
  } catch (error) {
    console.log("Error sending verification email", error);
    throw new Error("Error sending verification email", error);
  }
};
