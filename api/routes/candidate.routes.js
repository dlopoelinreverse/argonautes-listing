const router = require("express").Router();
const candidateController = require("../controllers/candidate.controller");

router.get("/", candidateController.getAllCandidates);
router.post("/", candidateController.createCandidate);

module.exports = router;
