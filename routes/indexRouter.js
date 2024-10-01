const { Router } = require("express");

const router = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
const links = [{ href: "/", text: "Home" }];

router.get("/", (req, res) => res.render("index", { messages, links }));

module.exports = router;
