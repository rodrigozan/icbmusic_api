import express from "express";
/*import SetlistController from "./controllers/SetlistController";
import MusicController from "./controllers/MusicController";
import ChordController from "./controllers/ChordController";]*/

const routes = express.Router();

routes.get("/", (req, res) => {
  //res.status(200).json({ message: "Welcome to ICB Music API" });
  console.log({ message: "Welcome to ICB Music API" });
});

/*routes.get('/setlists', SetlistController.index);
routes.get('/setlists/:id', SetlistController.show);
routes.post('/setlists', SetlistController.store);
routes.put('/setlists/:id', SetlistController.update);
routes.delete('/setlists/:id', SetlistController.delete);

routes.get('/musics', MusicController.index);
routes.get('/musics/:id', MusicController.show);
routes.post('/musics', MusicController.store);
routes.put('/musics/:id', MusicController.update);
routes.delete('/musics/:id', MusicController.delete);

routes.get('/chords', ChordController.index);
routes.get('/chords/:id', ChordController.show);
routes.post('/chords', ChordController.store);
routes.put('/chords/:id', ChordController.update);
routes.delete('/chords/:id', ChordController.delete);*/

export default routes;
