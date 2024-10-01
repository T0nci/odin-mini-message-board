require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello from Mini Message Board!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Mini Message Board listening on port ${PORT}!`),
);
