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

// لو الموديل موجود بالفعل استخدمه، لو لا اعمل جديد
module.exports = mongoose.models.Artifact || mongoose.model("Artifact", artifactSchema);
