import Setlist from "../models/setlist.js";

const getAllSetlists = async () => {
  return await Setlist.find().populate("musics");
};

const createSetlist = async (setlist) => {
  return await Setlist.create(setlist);
};

const getSetlistById = async (id) => {
  return await Setlist.findById(id).populate("musics");
};

const updateSetlist = async (id, setlist) => {
  return await Setlist.findByIdAndUpdate(id, setlist, { new: true }).populate(
    "musics"
  );
};

const deleteSetlist = async (id) => {
  return await Setlist.findByIdAndDelete(id);
};

export default {
  getAllSetlists,
  createSetlist,
  getSetlistById,
  updateSetlist,
  deleteSetlist,
};
