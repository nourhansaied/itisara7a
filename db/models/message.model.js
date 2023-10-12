import mongoose from "mongoose";


const messageSchema = new mongoose.Schema(
  {
    messageText: String,
    receivedId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.model("Message", messageSchema)

export default messageModel


// id ...objectId ...24hex


