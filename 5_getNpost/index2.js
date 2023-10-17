const express = require("express");
const app = express();
const port=8001;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// localhost:8000 url 접속에 대한 응답을 위해 만든 코드이다.
app.get("/", function(req, res){
    res.render("index2"
    );
})

app.get("/result", function(req, res){
    res.render("result", {
        title: "GET 요청 폼 확인하기",
        userInfo: req.query,
    });
});

app.post("/result", function(req, res){
    res.render("result", {
        title: "POST 요청 폼 확인하기",
        userInfo: req.body,
    });
});

app.listen(port, function(){
    console.log(`주소는 http://localhost:${port} 입니다.`)
})