import { Schema, models, model } from "mongoose";

const DocSchema = new Schema({
  title: String,
  bookname: String,
  author: String,
  summary: String,
  introduction: String,
  syllabus: [String],
});

export const MatDoc = models.MatDoc || model("MatDoc", DocSchema);
