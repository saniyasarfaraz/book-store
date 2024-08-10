const mongoose = require("mongoose");

const order = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  book: {
    type: mongoose.Types.ObjectId,
    ref: "books",
  },
  status: {
    type: String,
    default: "Order Places",
    enum: ["Order Placed"],
  },
});

const mongoose = require("mongoose");

const order = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  book: {
    type: mongoose.Types.ObjectId,
    ref: "books",
  },
  status: {
    type: String,
    default: "Order Places",
    enum: ["Order Placed"],
  },
});
