import setlistService from "../services/setlist.js";

const getAllSetlists = async (req, res) => {
  try {
    const setlists = await setlistService.getAllSetlists();
    res.status(200).json(setlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSetlist = async (req, res) => {
  try {
    const setlist = await setlistService.createSetlist(req.body);
    res.status(201).json(setlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSetlistById = async (req, res) => {
  try {
    const setlist = await setlistService.getSetlistById(req.params.id);
    if (setlist) {
      res.status(200).json(setlist);
    } else {
      res.status(404).json({ message: "Setlist não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSetlist = async (req, res) => {
  try {
    const setlist = await setlistService.updateSetlist(req.params.id, req.body);
    if (setlist) {
      res.status(200).json(setlist);
    } else {
      res.status(404).json({ message: "Setlist não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSetlist = async (req, res) => {
  try {
    const setlist = await setlistService.deleteSetlist(req.params.id);
    if (setlist) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Setlist não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllSetlists,
  createSetlist,
  getSetlistById,
  updateSetlist,
  deleteSetlist,
};
