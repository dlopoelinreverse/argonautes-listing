const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER_PASS}@cluster0.xrzmien.mongodb.net/${process.env.MONGODB_DB}`
  )
  .then(() => console.log("Connected to MongoDB " + process.env.MONGODB_DB))
  .catch((error) => console.log("Failed to connect to MongoDB", error));
