const express = require("express");
const app = express();
const port=8002;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// localhost:8000 url 접속에 대한 응답을 위해 만든 코드이다.
app.get("/", function(req, res){
    res.render("practice");
})

app.get("/get", function(req, res){
    console.log(req.query);
    res.send("get 요청 성공!")
});

app.post("/post", function(req, res){
    console.log(req.body);
    res.send("post 요청 성공!")
});

app.listen(port, function(){
    console.log(`주소는 http://localhost:${port} 입니다.`)
})