const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./userAuth");
const Book = require("../models/book");

//add book
router.post("/add-book", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const user = await User.findById(id);
    if (user.role !== "admin") {
      return res.status(400).json({ message: "You do not have access" });
    }

    const book = new Book({
      bookName: req.body.bookName,
      author: req.body.author,
      imageSource: req.body.imageSource,
      bookGenre: req.body.bookGenre,
      price: req.body.price,
      pages: req.body.pages,
      Bookdescription: req.body.Bookdescription,
    });
    await book.save();
    res.status(200).json({ message: "Book added succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

//update book
router.put("/update-book", authenticateToken, async (req, res) => {
  try {
    const { bookid } = req.headers;
    await Book.findByIdAndUpdate(bookid, {
      bookName: req.body.bookName,
      author: req.body.author,
      imageSource: req.body.imageSource,
      bookGenre: req.body.bookGenre,
      price: req.body.price,
      pages: req.body.pages,
      Bookdescription: req.body.Bookdescription,
    });

    return res.status(200).json({ message: "Book updated succesfully" });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "An error occurred" });
  }
});

//delete book
router.delete("/delete-book", authenticateToken, async (req, res) => {
  try {
    const { bookid } = req.headers;
    await Book.findByIdAndDelete(bookid);

    return res.status(200).json({ message: "Book deleted succesfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

//get all books
router.get("/get-all-books", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    return res.json({
      status: "Success",
      data: books,
    });
  } catch (error) {
    res.status(500).json({ message: "An error occured" });
  }
});

//get recent books
router.get("/get-recent-books", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 }).limit(4);
    return res.json({
      status: "Success",
      data: books,
    });
  } catch (error) {
    res.status(500).json({ message: "An error occured" });
  }
});

//get book by id

router.get("/get-book-by-id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json({
      status: "Success",
      data: book,
    });
  } catch (error) {
    res.status(500).json({ message: "An error occured" });
  }
});

module.exports = router;
