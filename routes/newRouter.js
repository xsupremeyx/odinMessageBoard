const { Router } = require('express');

const newRouter = Router();

newRouter.get("/", (req, res, next) => {
    try{
        res.render("form");
    }
    catch(err){
        next(err);
    }
})

newRouter.post("/", (req, res, next) => {
    try{
        console.log(req.body);
        res.send("Message received");
    }
    catch(err){
        next(err);
    }
})

module.exports = newRouter;