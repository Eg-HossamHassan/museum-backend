const mongoose = require("mongoose");

const artifactSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  era: String,
  location: String,
  translations: {
    en: String,
    ar: String,
    fr: String
  }
});

module.exports = mongoose.model("Artifact", artifactSchema);
