const { Router } = require('express');

const indexRouter = Router();

// import controllers
const  messageController = require("../controllers/messageController")

indexRouter.get("/", messageController.getIndex);

module.exports = indexRouter;