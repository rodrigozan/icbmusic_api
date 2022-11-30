import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://rodrigozandonadidev_blog:Seilad12@blog-rodzan-webdev.244r5ze.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

