const mongoose = require('mongoose');

// set startupSchema
const StartupSchema = new mongoose.Schema({
  nameOfCompany: { type: String, default: '', unique: true },
  location: { type: String, default: '', unique: true },
  websiteURL: { type: String, default: '' },
  rating: { type: Number, default: null, unique: true },
  yearOfFounded: { type: Date, default: null },
  funding: { type: Number, default: '' },
  socialLink: { type: String, default: '' },
  overview: { type: String, default: '' },
  sector: { type: String, default: '', unique: true },
  product: { type: String, default: '' },
});

// Startup model for StartupSchema
const Startup = mongoose.model('Startup', StartupSchema);

// exported model
module.exports = Startup;
