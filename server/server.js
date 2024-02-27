const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas/index');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/Bassline', { // Be sure to establish this connection in MongoDB
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  try {
    console.log('Connected to MongoDB database');

  
    const server = new ApolloServer({
     typeDefs,
     resolvers,
    });

    await server.start();
    server.applyMiddleware({ app });

  // Start your server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error('Error starting Apollo server:', error);
}
});

