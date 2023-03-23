import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {

    console.log('Data:', req.body);

    res.status(200).json({name: 'Hey, I am guessing that you are a developer. Great to meet you! Nigel x'});
}