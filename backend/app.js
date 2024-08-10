const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");

app.get("/", (req, res) => {
  res.send("hello from backend");
});

// creating port
app.listen(process.env.PORT, () => {
  console.log("severr started");
  console.log(`server is running at port ${process.env.PORT}`);
});
