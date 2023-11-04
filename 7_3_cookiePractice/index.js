const cookieRun = require("cookie-parser");
const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieRun());

const cookieConfig = {
    // httpOnly: true, 
    maxAge: 100000,
};

app.get("/", function(req, res){
    res.render("index");
});

app.get("/setCookie", (req, res)=>{
    res.cookie("key1", "value1", cookieConfig);
    res.send(req.cookies)
});

app.listen(port, function () {
    console.log(`주소는 http://localhost:${port} 입니다.`);
});