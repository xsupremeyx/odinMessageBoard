const { Router } = require('express');

const newRouter = Router();

newRouter.get("/", (req, res) => {
    try{
        res.render("new");
    }
    catch(err){
        next(err);
    }
})

module.exports = newRouter;