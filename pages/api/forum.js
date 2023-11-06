import { mongooseConnect } from "@/lib/mongoose";
import { Forum } from "@/models/Forum";

export default async function handle(req, res) {
  const { method } = req;

  mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Forum.findOne({ _id: req.query.id }));
    } else {
      res.json(await Forum.find());
    }
  }

  if (method === "POST") {
    const { status, comment } = req.body;

    const ForumDoc = await Forum.create({
      status,
      comment,
    });
    res.json(ForumDoc);
  }

  if (method === "DELETE") {
    const { id } = req.query;

    try {
      const deletedStatus = await Forum.findByIdAndRemove(id);

      if (!deletedStatus) {
        return res.status(404).json({ message: "Status not found" });
      }

      return res.status(200).json({ message: "Status deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
