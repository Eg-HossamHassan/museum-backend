const router = require("express").Router();
const Artifact = require("../models/Artifact");

router.get("/", async(req,res)=>{

 const artifacts = await Artifact.find();

 res.json(artifacts);

});

router.get("/search", async(req,res)=>{

 const q = req.query.q;

 const artifacts = await Artifact.find({
  name:{$regex:q,$options:"i"}
 });

 res.json(artifacts);

});

module.exports = router;