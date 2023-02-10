const CandidateModel = require("../models/condidate.model");

module.exports.getAllCandidates = async (req, res) => {
  const candidates = await CandidateModel.find();
  console.log(candidates);
  res.status(200).send(candidates);
};

module.exports.createCandidate = async (req, res) => {
  const { name, age } = req.body;
  try {
    const candidate = await CandidateModel.create({
      name,
      age,
    });
    res.status(201).send(candidate);
  } catch (error) {
    res.status(400).send({ message: "Error creating candidate", error });
  }
};
