const cookieRun = require("cookie-parser");
const express = require("express");
const router = require("./routes");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieRun());
app.use("/", router);

app.get("*", function(req, res){
    res.send("이게 무슨 주소고? 개 킹받누!");
});

app.listen(port, function () {
    console.log(`주소는 http://localhost:${port} 입니다.`);
});