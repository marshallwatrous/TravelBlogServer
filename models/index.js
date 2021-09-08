
const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/citieslib';

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,

};

mongoose.connect(connectionString, configOptions)
  .then(() => console.log('MongoDB successfully connected...'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

  // added the Article property with the .Article because we are no longer using an embedded schema
module.exports = {
  City: require('./City').City,
  Article: require ('./City').Article
};