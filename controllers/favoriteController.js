const User = require("../models/User");

exports.addFavorite = async(req,res)=>{

 const user = await User.findById(req.user.id);

 user.favorites.push(req.params.artifactId);

 await user.save();

 res.json(user);

};