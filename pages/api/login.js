import { Profile } from "@/models/Profile";
import { mongooseConnect } from "@/lib/mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await mongooseConnect();

  const { method, body } = req;

  if (method === "POST") {
    const { email, password } = body;

    try {
      // Fetch the profile where the email matches the user's email
      const profileDoc = await Profile.findOne({ email });

      if (!profileDoc || !profileDoc.password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Compare password
      const isPasswordValid = await bcrypt.compare(
        password,
        profileDoc.password
      );

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Create a JWT token
      const token = jwt.sign({ userId: profileDoc._id }, "your-secret-key", {
        expiresIn: "1h",
      });

      return res.json({ token });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Failed to authenticate", details: error.message });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
