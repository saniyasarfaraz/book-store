const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
const user = require("./routes/user");
const Book = require("./routes/book");

app.use(express.json());
//routes
app.use("/api/v1", user);
app.use("/api/v1", Book);

app.get("/", (req, res) => {
  res.send("hello from backend");
});

// creating port
app.listen(process.env.PORT, () => {
  console.log("server started");
  console.log(`server is running at port ${process.env.PORT}`);
});
