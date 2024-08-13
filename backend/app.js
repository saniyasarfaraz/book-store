const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
const user = require("./routes/user");

const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/order");
const cors = require("cors");
const Book = require("./routes/book");

app.use(cors());
app.use(express.json());
//routes
app.use("/api/v1", user);

app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);

app.use("/api/v1", Book);

app.get("/", (req, res) => {
  res.send("hello from backend");
});

// creating port
app.listen(process.env.PORT, () => {
  console.log("server started");
  console.log(`server is running at port ${process.env.PORT}`);
});
