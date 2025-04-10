import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
  otp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Otp",
  },
});
const user = mongoose.model("User", userSchema);
export default user;