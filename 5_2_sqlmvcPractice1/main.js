const express = require("express");
const app = express();
const router = require("./routes/index.js");
const port = 5555;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",router);
app.get("*", function(req, res){
    res.render("404.ejs");
});

app.listen(port, function () {
    console.log(`주소는 http://localhost:${port} 입니다.`);
});