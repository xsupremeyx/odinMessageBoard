// express imports
const express = require("express");
const app = express();
const path = require("node:path");

// ejs and styles imports
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// middleware for form
app.use(express.urlencoded({extended: true}));

// routes imports
const indexRouter = require("./routes/indexRouter")
const newRouter = require("./routes/newRouter")
const messagesRouter = require("./routes/messagesRouter")

// routes use
app.use("/messages", messagesRouter);
app.use("/new", newRouter);
app.use("/", indexRouter);

// 404 handler
app.use((req, res, next) => {
    const err = new Error("404 Not Found");
    err.status = 404;
    next(err);
})

// final error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(`${err.status || 500 } - ${err.message}`); // fallback error message for now
})

const PATH = process.env.PORT || 3000;
app.listen(PATH, (err) => {
    if(err){
        console.error("Error starting server:", err);
        return;
    }
    console.log(`Server is running on port ${PATH}`);
})