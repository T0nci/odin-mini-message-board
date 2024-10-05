const { Router } = require("express");
const indexController = require("../controllers/indexController");

const router = Router();

router.get("/", indexController.messagesGet);
router.get("/new", indexController.messagesCreateGet);
router.post("/new", indexController.messagesCreatePost);
router.get("/messages/:id", indexController.messageGet);

module.exports = router;
