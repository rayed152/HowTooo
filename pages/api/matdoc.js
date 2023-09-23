import { mongooseConnect } from "@/lib/mongoose";
import { MatDoc } from "@/models/MatDoc";

export default async function handle(req, res) {
  const { method } = req;

  mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await MatDoc.findOne({ _id: req.query.id }));
    } else {
      res.json(await MatDoc.find());
    }
  }

  if (method === "POST") {
    const { title, bookname, author, summary, introduction, syllabus } =
      req.body;
    const matdoc = await MatDoc.create({
      title,
      bookname,
      author,
      summary,
      introduction,
      syllabus,
    });
    res.json(MatDoc);
  }
}
