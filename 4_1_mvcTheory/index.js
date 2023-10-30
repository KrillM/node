const express = require("express");
const app = express();
const router = require("./routes"); // 라우터 불러오기, 기본으로 index를 불러오며 다른 파일 불러올 거면 경로 다 쓴다.
const port=8000;

app.set("view engine", "ejs");

// 호출하기 위해서 여기에 적음
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// 미들웨어로 걸어둠, 먼저 거는 순서에 따라 라우터가 호출된다.
app.use("/", router); 

app.get("*", function(req, res){
    res.send("페이지를 찾을 수 없습니다."); // 존재하지 않는 get 요청에 대한 메시지
})

app.listen(port, function(){
    console.log(`주소는 http://localhost:${port} 입니다.`)
})