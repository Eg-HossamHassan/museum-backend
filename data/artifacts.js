// data/artifacts.js
const fs = require("fs");

const artifacts = [];

for (let i = 1; i <= 1000; i++) {
  artifacts.push({
    name: `Artifact ${i}`,
    description: `Description of artifact ${i}`,
    image: `https://example.com/images/artifact${i}.jpg`,
    era: `${Math.floor(Math.random() * 20 + 1)}th Dynasty`,
    location: `Museum Location ${Math.ceil(Math.random()*50)}`,
    translations: {
      en: `Artifact ${i}`,
      ar: `قطعة أثرية ${i}`,
      fr: `Artefact ${i}`
    }
  });
}

// حفظ نسخة JSON منفصلة
fs.writeFileSync("artifacts.json", JSON.stringify(artifacts, null, 2));

module.exports = artifacts;