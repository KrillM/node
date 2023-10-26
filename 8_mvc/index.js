const express = require("express");
const app = express();
const router = require("./routes"); // 라우터 불러오기, 기본으로 index를 불러오며 다른 파일 불러올 거면 경로 다 쓴다.
const port=8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/", router); // 미들웨어로 걸어둠

app.get("*", function(req, res){
    res.send("페이지를 찾을 수 없습니다."); // 존재하지 않는 get 요청에 대한 메시지
})

app.listen(port, function(){
    console.log(`주소는 http://localhost:${port} 입니다.`)
})