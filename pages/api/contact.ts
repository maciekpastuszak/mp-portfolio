import nodemailer from "nodemailer";

export default async function (req: Request,res: Response) {

    const { name, email, message } = req.body;

    return req.status(200).json({message: "success"})
}