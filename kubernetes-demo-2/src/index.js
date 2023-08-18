const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.static("upload"));
const port = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  try {
    res.send({ message: "hello !!!" });
  } catch (err) {
    res.send({ error: err.message });
  }
});

app.get("/error", async (req, res) => {
  process.exit(1);
});

app.post("/create", async (req, res) => {
  const { name } = req.body;
  try {
    fs.mkdir("upload", (err) => {
      if (err) {
        console.log("error : ", err.message);
      }
      fs.writeFileSync(`upload/${name}.txt`, `this is named as ${name}.txt`);
    });
    res.send({ message: "file is created !!" });
  } catch (err) {
    res.send({ error: err.message });
  }
});

app.listen(port, () => {
  console.log("listening on port : " + port);
});
