import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const { MONGO_URL, PORT } = process.env;

const corsPolicy = {
  origin: 'http://localhost:3000',
  allowedHeaders: 'Content-Type, Authorization',
  methods: 'GET, POST, PUT, DELETE',
};

const app = express();
app.use(cors(corsPolicy));
app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/mainpage');
});

app.get('/mainpage', (req, res) => {
  res.send('MainPage');
});

app.get('/register', (req, res) => {
  res.send('Register');
});

app.get('/user', (req, res) => {
  res.send('user settings');
});

app.get('/user/mainpage', (req, res) => {
  res.send('user mainpage');
});

app.get('/user/favorites', (req, res) => {
  res.send('favorites');
});

app.get('/drink', (req, res) => {
  res.send('drink');
});

app.get('/drink/:id', (req, res) => {
  res.send('drink by name');
});

// Catch-all middleware for handling 404 errors
app.use((req, res) => {
  res.status(404).send('Not Found');
});

(async () => {
  try {
    await mongoose.connect(MONGO_URL, {});
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    app.close();
  }
})();
