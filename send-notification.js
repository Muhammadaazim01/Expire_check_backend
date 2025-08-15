import { sendNotification } from "../notificationcontroller.js"; // ES module

export default async function handler(req, res) {
  if (req.method === "POST") {
    await sendNotification(req, res);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
