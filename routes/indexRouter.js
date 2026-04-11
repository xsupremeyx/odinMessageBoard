const { Router } = require('express');

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    try{
        res.render("index");
    }
    catch(err){
        next(err);
    }
})

module.exports = indexRouter;