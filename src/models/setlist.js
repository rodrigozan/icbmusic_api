import mongoose from "mongoose";

const SetlistSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  musics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Music",
    },
  ],
  minister: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

export default mongoose.model("Setlist", SetlistSchema);
