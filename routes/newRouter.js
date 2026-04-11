const { Router } = require('express');

const newRouter = Router();

// import controllers
const  messageController = require("../controllers/messageController")

newRouter.get("/", messageController.getForm);

newRouter.post("/", messageController.createMessage);

module.exports = newRouter;