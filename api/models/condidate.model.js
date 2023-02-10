const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const CandidateModel = mongoose.model("candidate", candidateSchema);
module.exports = CandidateModel;
