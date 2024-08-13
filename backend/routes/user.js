const router = require("express").Router();
const User = require("../models/user");

//sign up
router.post("/sign-up", async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    if (username.length < 3) {
      return res
        .status(400)
        .json({ message: "Username must consists of than 3 characters " });
    }

    const existingUsername = await User.findOne({ username: username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists " });
    }

    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res.status(400).json({ message: "email already registered " });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must contains atleast 8 characters " });
    }

    //create new user
    const newUser = new User({
      username: username,
      email: email,
      password: password,
      address: address,
    });

    console.log("Received POST request at /sign-up");
    console.log("Request body:", req.body);
    await newUser.save();
    return res.status(200).json({ message: "Sign Up succsessful" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
