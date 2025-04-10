import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    default: null,
  },
  otp:{
    type:Number,
    default:null
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
});

const otp = mongoose.model("Otp", otpSchema);
export default otp;
