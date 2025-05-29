const { mongoose, Schema, mongo } = require("mongoose");

const messageModelSchema = new Schema(
  {
    content: { type: String, trim: true },
    chat: {
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const MessageSchema = mongoose.model("Message", messageModelSchema);
module.exports = MessageSchema;
