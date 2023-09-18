const { model, Schema, models } = require("mongoose");

const ProfileSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: Number,
  age: Number,
  email: { type: String, required: true },
  address: String,
  password: String,
});

export const Profile = models.Profile || model("Profile", ProfileSchema);
