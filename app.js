const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


let PATH = 3000
app.listen(PATH, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Server is running on port ${PATH}`);
})