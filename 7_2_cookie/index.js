const cookieRun = require("cookie-parser");
const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieRun());

const cookieConfig = {
    // httpOnly: true, // document.cookie를 불가능하게 해준다. 말 그대로 http(server)만 가능

    // 만료일은 maxAge이며 예악어다.
    maxAge: 30000, // ms 단위로 보존하고자 하는 기간을 설정한다.
    // expires: "2094-12-26T14:00", // 이때까지 살아있다면 창문넘어 도망친다.
    // path: "/", // "/" 이하는 전부 쿠키 사용 가능하다.
    
    // httpOnly, secure, signed는 boolean이다.
    // secure: true, // avalilable in https only
    // signed: true, // cookie 암호화 -> req.cookies
};

app.get("/", function(req, res){
    res.render("index");
});

app.get("/setCookie", (req, res)=>{
    // 서버가 쿠키를 만들어 응답을 보낸다.
    // 일부 내용만 변경할 경우 여기에 정의하면 된다.
    // key: key1 / value: value1
    res.cookie("key1", "value1", cookieConfig);
    res.cookie("popup", "1", cookieConfig);
    res.send("set Cookie")
});
app.get("/getCookie", (req, res)=>{
    console.log("cookies: ", req.cookies);
    res.send(req.cookies);
});

app.listen(port, function () {
    console.log(`주소는 http://localhost:${port} 입니다.`);
});