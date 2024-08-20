const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      // default:
      //   "https://th.bing.com/th/id/OIP.I3CuRhnCriikZ4KcNIzZrgHaHa?w=880&h=880&rs=1&pid=ImgDetMain",
      // default: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
      defualt: "./profile.svg",
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    favourites: [{ type: mongoose.Types.ObjectId, ref: "book" }],
    cart: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Book", //"book"
      },
    ],
    orders: [
      {
        type: mongoose.Types.ObjectId,
        ref: "order",
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", user);
