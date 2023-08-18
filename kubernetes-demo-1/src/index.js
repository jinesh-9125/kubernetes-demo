const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/", async (req, res) => {
  res.send("hello !!!!!!!!!!!!!!!");
});

app.get("/error", async (req, res) => {
  process.exit(1);
});

app.listen(port, () => {
  console.log("server is running on port : ", port);
});
