const bodyParser = require("body-parser");
const express = require("express");
const candidateRoutes = require("./routes/candidate.routes");
const cors = require("cors");
require("body-parser");
require("dotenv").config({ path: ".env" });
require("./mondodb.config");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/candidate", candidateRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
