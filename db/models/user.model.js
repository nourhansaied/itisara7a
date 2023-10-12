

import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      minLength: [3, "name is too short"],
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    isVerified: {
      type: Boolean,
      default:false
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema)




export default userModel;