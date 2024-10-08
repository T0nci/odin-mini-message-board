require("dotenv").config();
const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })); // parses the req body into req.body

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Mini Message Board listening on port ${PORT}!`),
);
