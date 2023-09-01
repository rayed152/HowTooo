import { mongooseConnect } from "@/lib/mongoose";
import { Doc } from "@/models/Doc";

export default async function handle(req, res) {
  const { method } = req;

  mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Doc.findOne({ _id: req.query.id }));
    } else {
      res.json(await Doc.find());
    }
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
