const express = require("express");
const app = express();
const router = require("./routes/index.js"); // 원래는 파일이름을 생략해도 되나 보수적으로 접근하기로 함
const port = 8000;

app.set("view engine", "ejs"); // view engine으로 뒤에 ejs 파일 타입을 정했으므로 생략해도 무관하다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",router);
app.get("*", function(req, res){
    // res.send("유령 페이지입니다."); 
    res.render("404.ejs");
});

app.listen(port, function () {
    console.log(`주소는 http://localhost:${port} 입니다.`);
});