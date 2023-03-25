import { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  try {
    await sendgrid.send({
      to: "nigel@enfiniti.xyz", // Your email where you'll receive emails
      from: "nigel@datarav3.art", // your website email address here
      subject: "New website message!",
      html: `<div>You've got mail</div> <div>${name}</div> <div>${email}</div> <div>${message}</div>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ sent: "success" });
}
