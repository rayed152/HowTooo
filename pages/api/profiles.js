import { Profile } from "@/models/Profile";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handler(req, res) {
  // Connect to the database
  await mongooseConnect();

  const { method, query } = req;

  if (method === "GET") {
    const { email } = query;

    if (!email) {
      return res.status(400).json({ error: "Missing email parameter" });
    }

    try {
      // Fetch the profile where the email matches the user's email
      const profileDoc = await Profile.findOne({ email });

      if (!profileDoc) {
        return res.status(404).json({ error: "Profile not found" });
      }

      return res.json(profileDoc);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch profile" });
    }
  }

  if (method === "POST") {
    const { firstName, lastName, phone, age, address, email } = req.body;

    const profileDoc = await Profile.create({
      firstName,
      lastName,
      phone,
      age,
      address,
      email,
    });

    res.json(profileDoc);
  }
}
