const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { randomUsers, randomThoughts } = require('./data');

// Event listener for errors that occur with connection.
connection.on('error', (err) => console.error(err));

// Only listens for event listener once, and checks then drops if users db already exists.
connection.once('open', async () => {
  console.log('Connected to database.');
  try {
    // Mongoose pluralizes the model names for collection names by default 'User' becomes 'users'.
    let userCheck = await connection.db
      .listCollections({ name: 'users' })
      .toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    // Thought model references Reaction schema, included here.
    let thoughtCheck = await connection.db
      .listCollections({ name: 'thoughts' })
      .toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    // Generates random users and thoughts.
    const users = randomUsers(8);
    const thoughts = randomThoughts(8);

    // Inserts them into users and thoughts collection.
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);
  } catch (err) {
    console.error(err);
  }
});
