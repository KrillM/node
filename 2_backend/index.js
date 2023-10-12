const express = require("express");
const app = express();
const port = 8000;

app.get("/", function(req, res){
    res.send("hello world");
})

app.listen(port, function(){
    console.log(`주소창에 다음과 같이 입력하세요: http://localhost:${port}`);
});