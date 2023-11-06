import { Schema, models, model } from "mongoose";

const ForumSchema = new Schema({
  status: {
    type: String,
    required: true,
  },

  comment: [
    {
      comment: String,
    },
  ],
});

export const Forum = models.Forum || model("Forum", ForumSchema);
