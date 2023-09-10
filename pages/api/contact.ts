import nodemailer from "nodemailer";

export default async function (req: Request,res: Response) {

    const { name, email, message } = req.body;

    const user = process.env.user;

    const data = {
        name, email, message
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 456,
        secure: true,
        auth: {
            user: process.env.user,
            pass: process.env.pass,
        },
    });

    try {

        const mail = await transporter.sendMail({
            from: user,
            to: process.env.mymail,
            replyTo: email,
            subject: `Contact form from ${name}`,
            html: `
            <p>Name: ${name}</p>
            <p>E-mail: ${email}</p>
            <p>Message: ${message}</p>
            `,
        })

        console.log("Message sent:", mail.messageId)

        return req.status(200).json({message: "success"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Could not send the email. Your message was not sent"})
    }
}