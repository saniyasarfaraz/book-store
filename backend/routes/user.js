const router = require("express").Router();
const User = require("../models/user");
const User = require("../models/book");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./userAuth");

//sign up

router.post("/sign-up", async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    // Validate username
    if (username.length < 3) {
      return res
        .status(400)
        .json({ message: "Username must consist of more than 3 characters" });
    }

    // Check if the username already exists
    const existingUsername = await User.findOne({ username: username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Check if the email already exists
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Validate password length
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must contain at least 8 characters" });
    }

    // Hash the password
    const hashPass = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username: username,
      email: email,
      password: hashPass,
      address: address,
    });

    // Save user to the database
    await newUser.save();

    // Respond with success message
    return res.status(200).json({ message: "Sign Up successful" });
  } catch (error) {
    console.error("Error in sign-up route:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

//sign in
router.post("/sign-in", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(400).json({ message: "Username does not exist" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (isMatch) {
      //   const authClaims = [
      //     { name: existingUser.username },
      //     { role: existingUser.role },
      //   ];

      // const token = jwt.sign({ authClaims }, "bookStore123", {
      //     expiresIn: "30d",
      //   });

      const token = jwt.sign(
        { name: existingUser.username, role: existingUser.role },
        "bookStore123",
        {
          expiresIn: "30d",
        }
      );
      return res.status(200).json({
        id: existingUser._id,
        role: existingUser.role,
        token: token,
      });
    } else {
      return res.status(400).json({ message: "Invalid password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

//get-user-imformation
router.get("/get-user-information", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const data = await User.findById(id).select("-password ");
    return res.status(200).json(data);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
});

//update address
router.put("/update-address", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const { address } = req.body;
    await User.findByIdAndUpdate(id, { address: address });
    return res.status(200).json({ message: "address updated succssfully " });
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
});
// Add a book to favorites
router.post("/favorites/:bookId", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Assuming req.user contains authenticated user data
    if (!user) return res.status(404).json({ message: "User not found" });

    const bookId = req.params.bookId;
    if (!user.favourites.includes(bookId)) {
      user.favourites.push(bookId);
      await user.save();
    }

    res.json(user.favourites);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Remove a book from favorites
router.delete("/favorites/:bookId", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const bookId = req.params.bookId;
    user.favourites = user.favourites.filter((id) => id.toString() !== bookId);
    await user.save();

    res.json(user.favourites);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get user favorites
router.get("/favorites", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("favourites");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.favourites);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
