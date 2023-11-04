const express = require("express");
const app = express();
const router = require("./routes")
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/",router);
app.get("*", function(req, res){
    res.send("404 에러입니다.");
});

app.listen(port, function () {
    console.log(`주소는 http://localhost:${port} 입니다.`);
});