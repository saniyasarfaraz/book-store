const router = require("express").Router();
const User = require("../models/user");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./userAuth");


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


    const hashPass = await bcrypt.hash(password, 10);
r
    //create new user
    const newUser = new User({
      username: username,
      email: email,

      password: hashPass,

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


module.exports = router;
