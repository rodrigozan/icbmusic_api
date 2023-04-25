import Music from "../models/music.js";

const getAllMusics = async () => {
  return await Music.find().populate("chords");
};

const createMusic = async (music) => {
  return await Music.create(music);
};

const getMusicById = async (id) => {
  return await Music.findById(id).populate("chords");
};

const updateMusic = async (id, music) => {
  return await Music.findByIdAndUpdate(id, music, { new: true }).populate(
    "chords"
  );
};

const deleteMusic = async (id) => {
  return await Music.findByIdAndDelete(id);
};

export default {
  getAllMusics,
  createMusic,
  getMusicById,
  updateMusic,
  deleteMusic,
};
