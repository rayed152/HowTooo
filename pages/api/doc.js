import { mongooseConnect } from "@/lib/mongoose";
import { Doc } from "@/models/Doc";

export default async function handle(req, res) {
  const { method } = req;

  mongooseConnect();

  if (method === "GET") {
    res.json(await Doc.find());
  }

  if (method === "POST") {
    const { title, summary, introduction, concept } = req.body;
    const doc = await Doc.create({
      title,
      summary,
      introduction,
      concept,
    });
    res.json(Doc);
  }
}
