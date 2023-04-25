import mongoose from "mongoose";

const MusicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  video: {
    type: String,
  },
  chords: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chord",
    },
  ],
});

export default mongoose.model("Music", MusicSchema);
