import MusicService from "../services/music.js";

const musicService = new MusicService();

class MusicController {
  async getAll(req, res) {
    try {
      const musics = await musicService.getAll();
      res.status(200).json(musics);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const music = await musicService.getById(req.params.id);
      res.status(200).json(music);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const music = await musicService.create(req.body);
      res.status(201).json(music);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const music = await musicService.update(req.params.id, req.body);
      res.status(200).json(music);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      await musicService.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default MusicController;
