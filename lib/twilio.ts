// // pages/api/send-2fa.ts
// import type { NextApiRequest, NextApiResponse } from "next";
// import twilio from "twilio";

// const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") return res.status(405).end();

//   const { email } = req.body;
//   try {
//     // This could be phone-based or email-to-phone mapping in DB
//     await client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID)
//       .verifications
//       .create({ to: "+254XXXXXXXXX", channel: "sms" });

//     res.status(200).json({ success: true });
//   } catch (error: any) {
//     res.status(500).json({ error: error.message });
//   }
// }
