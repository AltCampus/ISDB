const mongoose = require('mongoose');

// set startupSchema
const StartupSchema = new mongoose.Schema({
  nameOfCompany: { type: String, default: '' },
  location: { type: String, default: '' },
  websiteURL: { type: String, default: '' },
  rating: { type: Number, default: 0 },
  yearOfFounded: { type: Number, default: 0 },
  funding: { type: Number, default: 0 },
  socialLink: { type: String, default: '' },
  overview: { type: String, default: '' },
  sector: { type: String, default: '' },
  product: { type: String, default: '' },
});

// Startup model for StartupSchema
const Startup = mongoose.model('Startup', StartupSchema);

// exported model
module.exports = Startup;
