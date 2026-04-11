const { Router } = require('express');

const messagesRouter = Router();

// import controllers
const  messageController = require("../controllers/messageController")

messagesRouter.get("/:id", messageController.getMessage);

module.exports = messagesRouter;