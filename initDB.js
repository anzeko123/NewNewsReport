
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

  const conn = mongoose.connection;
  conn.on('error', error => console.error(error)); 
  conn.once('open', () => {
      console.log('Connected to Mongoose');
  });

module.exports = conn;