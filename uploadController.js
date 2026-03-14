// controllers/uploadController.js
exports.uploadImage = (req, res) => {
  if (!req.file) return res.status(400).json({ msg: "No file uploaded" });

  res.json({ imageUrl: `/uploads/${req.file.filename}` });
};