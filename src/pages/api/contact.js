import { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    try {
        // console.log("REQ.BODY", req.body);
        await sendgrid.send({
          to: "nigel@enfiniti.xyz", // Your email where you'll receive emails
          from: "nigel@datarav3.art", // your website email address here
          subject: "You've got a new email",
          html: `<div>You've got a mail</div> ${req.body.name} ${req.body.email} ${req.body.message}`,
        });
      } catch (error) {
        // console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
      }
    
      return res.status(200).json({ error: "sent" });
}