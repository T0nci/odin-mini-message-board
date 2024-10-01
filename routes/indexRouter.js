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

router.get("/messages/:id", (req, res) => {
  const messageID =
    typeof Number(req.params.id) === "number" &&
    !isNaN(Number(req.params.id)) &&
    Number(req.params.id) < messages.length
      ? Number(req.params.id)
      : 0;

  res.render("message", { message: messages[messageID], links });
});

module.exports = router;
