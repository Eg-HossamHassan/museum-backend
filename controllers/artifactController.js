const Artifact = require("../models/Artifact");

exports.getAllArtifacts = async (req, res) => {
  const artifacts = await Artifact.find();
  res.json(artifacts);
};

exports.searchArtifacts = async (req, res) => {
  const q = req.query.q;
  const artifacts = await Artifact.find({ name: { $regex: q, $options: "i" } });
  res.json(artifacts);
};