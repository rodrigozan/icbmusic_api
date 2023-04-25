import ChordService from "../services/chord";

const chordService = new ChordService();

class ChordController {
  async getAll(req, res) {
    try {
      const chords = await chordService.getAll();
      res.status(200).json(chords);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const chord = await chordService.getById(req.params.id);
      res.status(200).json(chord);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const chord = await chordService.create(req.body);
      res.status(201).json(chord);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const chord = await chordService.update(req.params.id, req.body);
      res.status(200).json(chord);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      await chordService.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default ChordController;
