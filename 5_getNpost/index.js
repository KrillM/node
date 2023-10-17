const express = require("express");
const app = express();
const port=8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// localhost:8000 url 접속에 대한 응답을 위해 만든 코드이다.
app.get("/", function(req, res){
    res.render("index");
})

app.get("/get", function(req, res){
    console.log(req.query);
    //req.query(); // get 요청에 대해 client가 보낸 데이터를 담아 온다.
    // 데이터 전송 시에 form 태그를 이용할 경우, method를 get으로 설정하면 get 요청한다.
    // url에서 기본 주소 위에 오는 ?id=krille&pw=11234이란 주소를 의미한다.
    // id: key, krille: value이다.
    res.send("get 요청 성공!")
})

// get: 조회, 데이터 저장(db에 데이터 저장), 원래 가지고 있던 데이터를 다루기 위해 사용
app.get("/get2", function(req, res){
    res.send(`아이디: ${req.query.id}, 비밀번호 ${req.query.pw}, 이름 ${req.query.name}, 이메일 ${req.query.email}`)
})

// post 요청 처리하는 방법
// url로 표현할 수 없으므로 req.query가 아닌 req.body로 처리한다.
app.post("/post", function(req, res){
    console.log(req.body);
    res.send("post 요청 성공!")
})

app.listen(port, function(){
    console.log(`주소는 http://localhost:${port} 입니다.`)
})