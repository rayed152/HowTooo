import { mongooseConnect } from "@/lib/mongoose";
import { MatCourse } from "@/models/MatCourse"; // Updated import for MatCourse

export default async function handle(req, res) {
  const { method } = req;

  mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      try {
        const course = await MatCourse.findOne({ _id: req.query.id });
        res.json(course);
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      try {
        const courses = await MatCourse.find();
        res.json(courses);
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  }

  if (method === "POST") {
    const { courseName, summary, description, chapters } = req.body;

    try {
      const newCourse = await MatCourse.create({
        courseName,
        summary,
        description,
        chapters,
      });
      res.json(newCourse);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
