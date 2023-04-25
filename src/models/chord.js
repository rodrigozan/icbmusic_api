import mongoose from "mongoose";

const ChordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  musical_arrangement: [
    {
      type: String,
      required: true,
    },
  ],
  chords: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Chord", ChordSchema);
