const router = require("express").Router();
const { getAllArtifacts, searchArtifacts } = require("../controllers/artifactController");

router.get("/", getAllArtifacts);
router.get("/search", searchArtifacts);

module.exports = router;
