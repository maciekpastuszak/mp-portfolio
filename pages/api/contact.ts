import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface RequestBody {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  const user = process.env.user;

  const data: RequestBody = {
    name,
    email,
    message,
  };

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: process.env.user,
      to: process.env.mailTo,
      replyTo: email,
      subject: `Contact form from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>E-mail: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    console.log("Message sent:", mail.messageId);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Could not send the email. Your message was not sent",
    });
  }
}
