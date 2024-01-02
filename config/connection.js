const { connect, connection } = require('mongoose');

// Creates connection to socialMediaDB database, using 27017 the default port for MongoDB.
connect('mongodb://127.0.0.1:27017/socialMediaDB')
  // Promise callback function to verify database is connected. If catch statement callback is rejected, logs error message.
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((error) => {
    console.error(`Connection has failed. Reason: ${error}`);
  });

module.exports = connection;
