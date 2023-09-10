import { Schema, models, model } from "mongoose";

const ProblemSchema = new Schema({
  email: String,
  topic: String,
  description: String,
});

export const Problem = models.Problem || model("Problem", ProblemSchema);
