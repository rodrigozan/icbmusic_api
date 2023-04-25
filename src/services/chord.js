import Chord from "../models/chord.js";

const getAllChords = async () => {
  return await Chord.find();
};

const createChord = async (chord) => {
  return await Chord.create(chord);
};

const getChordById = async (id) => {
  return await Chord.findById(id);
};

const updateChord = async (id, chord) => {
  return await Chord.findByIdAndUpdate(id, chord, { new: true });
};

const deleteChord = async (id) => {
  return await Chord.findByIdAndDelete(id);
};

export default {
  getAllChords,
  createChord,
  getChordById,
  updateChord,
  deleteChord,
};
