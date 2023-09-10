import { mongooseConnect } from "@/lib/mongoose";
import { Problem } from "@/models/Problem";

export default async function handle(req, res) {
  const { method } = req;

  mongooseConnect();

  if (method === "POST") {
    const { email, topic, description } = req.body;
    const ProblemDoc = await Problem.create({
      email,
      topic,
      description,
    });
    res.json(ProblemDoc);
  }
}
