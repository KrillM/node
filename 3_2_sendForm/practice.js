const express = require("express");
const app = express();
const port = 5555;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.render("practice2.ejs");
});

app.get("/axios", function (req, res) {
    console.log(req.query);
    res.send(req.query);
});

// 실습 2번 창고
app.post("/axios", function (req, res) {
    const name = "krille";
    const password = 1234;

    console.log(req.body);
    if (req.body.name == name && req.body.password == password) {
        res.send({ success: true, message: "로그인 성공!", name: req.body.name });
    } else {
        res.send({ success: false, message: "로그인 실패: 올바르지 않은 이름 또는 비밀번호" });
    }
});

app.listen(port, function () {
    console.log(`주소는 http://localhost:${port} 입니다.`);
});