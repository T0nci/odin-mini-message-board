const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New message" },
];

const messagesGet = asyncHandler(async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { links, messages });
});

const messagesCreateGet = (req, res) => res.render("form", { links });

const messagesCreatePost = asyncHandler(async (req, res) => {
  await db.createMessage(req.body.author, req.body.message);
  res.redirect("/");
});

const messageGet = asyncHandler(async (req, res) => {
  const message = await db.getMessageById(req.params.id);
  res.render("message", { links, message });
});

module.exports = {
  messagesGet,
  messagesCreateGet,
  messagesCreatePost,
  messageGet,
};
