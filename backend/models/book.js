const mongoose = require("mongoose");

const book = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    imageSource: {
      type: String,
      required: true,
    },
    bookGenre: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    Bookdescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("book", book);
