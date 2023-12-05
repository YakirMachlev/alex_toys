const mongoose = require("mongoose");

const toySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The toy must have a name"],
  },
  info: {
    type: String,
    required: [true, "The toy must have info"],
  },
  category: {
    type: String,
    required: [true, "The toy must have a category"],
  },
  img_url: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: [true, "Toy missing price"],
  },
  date_created: {
    type: Date,
    default: new Date(),
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

const Toy = mongoose.model("Toy", toySchema);
module.exports = Toy;