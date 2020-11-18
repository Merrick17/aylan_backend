const router = require("express").Router();
const messageController = require("../controllers/message.controller");
const verifToken = require("../utils/verifyToken");

router.get('/',  messageController.getAllMessages)
router.post("/create", messageController.addMessage)
router.delete("/:id/delete",  messageController.deleteMessage)

module.exports = router
