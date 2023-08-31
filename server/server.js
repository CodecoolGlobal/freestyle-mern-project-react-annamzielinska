require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const favRouter = require('./routes/favourites.js');
const userRoutes = require('./routes/user.js');
const { MONGO_URL, PORT } = process.env;

const corsPolicy = {
  origin: 'http://localhost:3000',
  allowedHeaders: 'Content-Type, Authorization',
  methods: 'GET, POST, PUT, DELETE',
};

const app = express();
app.use(cors(corsPolicy));
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });

app.use('/fav', favRouter);

app.use('/users', userRoutes);

module.exports = app;
