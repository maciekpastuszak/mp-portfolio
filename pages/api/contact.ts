import nodemailer from "nodemailer";

export default async function (req: Request,res: Response) {

    const { name, email, message } = req.body;

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
        return req.status(200).json({message: "success"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Could not send the email. Your message was not sent"})
    }
}