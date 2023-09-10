import { Schema, models, model } from "mongoose";

const DocSchema = new Schema({
  title: String,
  summary: String,
  introduction: String,
  concept: [String],
});

export const Doc = models.Doc || model("Doc", DocSchema);
