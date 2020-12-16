require('dotenv').config();

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
  console.log(`Connected to mongoDB on ${db.host}: ${db.port}`);
})

db.on('error', (err) => {
  console.log('error', err);
})

module.exports = {
  FastFood: require('./FastFood')
}