const mangoose = require("mongoose");

const conn = async () => {
  try {
    await mangoose.connect("mongodb://localhost:27017/book-store");
  } catch (error) {
    console.log(error);
  }
};
conn();
