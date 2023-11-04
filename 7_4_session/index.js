const session = require("express-session")
const express = require("express");
const app = express();
const port = 8000;

app.use(session({
    secret: "secret key",
    resave: false, // 모든 요청마다 session을 다시 저장할 거냐?
    saveUnitiailized: true, // 클라이언트가 처음 접속할 때 세션을 한 번 초기화할 건가? 말 건가?
    cookie: {
        httpOnly: true, // document.cookie 불가
        maxAge: 10000
    },
    // secure: true // https에서만 동작 하도록 한다.
}));

app.get("/", function(req, res){
    res.send("hello session");
})

app.get("/set", function(req, res){
    console.log("1: ", req.session)
    // 로그인 성공한 시점에 req.session.user에 user를 식별할 수 있는 고유한 값
    req.session.user="krille"
    console.log("2: ", req.session)
    res.send("set session");
})

app.get("/get", (req, res)=>{
    console.log("user: ", req.session.user)
    res.send({user: req.session.user});
})

app.listen(port, function () {
    console.log(`주소는 http://localhost:${port} 입니다.`);
});