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
const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New message" },
];

router.get("/", (req, res) => res.render("index", { messages, links }));
router.get("/new", (req, res) => res.render("form", { links }));
router.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
