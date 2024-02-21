// This is a start on our server file. I'm sure we will need to tailor/add to it as needed.

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/BasslineDB', { // Be sure to create this connection in MongoDB
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
  
  // Start your server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
