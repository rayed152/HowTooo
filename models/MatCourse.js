import { Schema, models, model } from "mongoose";

const MatCourseSchema = new Schema({
  courseName: String,
  summary: String,
  description: String,
  chapters: [
    {
      name: String,
      description: String,
      examples: [
        {
          description: String,
        },
      ],
      questions: [
        {
          question: String,
          solution: String,
        },
      ],
    },
  ],
});

export const MatCourse =
  models.MatCourse || model("MatCourse", MatCourseSchema);
