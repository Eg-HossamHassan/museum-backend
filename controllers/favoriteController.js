const User = require("../models/User");
const Artifact = require("../models/Artifact");

exports.addFavorite = async (req, res) => {
  try {
    // جلب المستخدم باستخدام ID من JWT
    const user = await User.findById(req.user);
    if (!user) return res.status(404).json({ msg: "User not found" });

    // جلب القطعة الأثرية
    const artifact = await Artifact.findById(req.params.artifactId);
    if (!artifact) return res.status(404).json({ msg: "Artifact not found" });

    // تحقق لو القطعة موجودة بالفعل في المفضلة
    if (user.favorites.includes(artifact._id)) {
      return res.status(400).json({ msg: "Already in favorites" });
    }

    // إضافة القطعة للمفضلة
    user.favorites.push(artifact._id);
    await user.save();

    res.json({ msg: "Artifact added to favorites" }); // ← لازم response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user).populate("favorites");
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
