const express = require("express"); // express 모듈 import
const app = express(); // server 객체
const PORT = 8000; // 포트
// 1 ~ 65536 존재. 1 ~ 1023까지는 정해진 기능이 있음.
// 3000, 8000, 8080, 8010, 3010, 3001
// 3306 : mysql에서 사용함.

// app객체의 view engine 설정을 ejs로 변경
app.set("view engine", "ejs");
// app 객체의 view 폴더 설정. 기본값 : ./views
// 만약 ./view 폴더로 바꾸고 싶다면 아래처럼 작성하면 됨.
// app.set("views", "./view")

app.use("/static", express.static(__dirname + "/static"));
// ~~~~/01-express/static에 클라이언트가 /static 이름으로 들어올 수 있다.

// app.use("/public", express.static(__dirname + "/static"));
// ~~~~/01-express/static에 클라이언트가 /puplic 이름으로 들어올 수 있다.

// get 메소드 (http 메소드) : 클라이언트가 요청할 수 있는 방법들을 정의함.
// localhost:8000
app.get("/", function (req, res) {
  // 응답 객체 내의 send 메소드 실행. "hello express" 문자열을 응답으로 전송하겠다.
  // send: 값을 보냄
  res.send("hello expressssssssss");
});
// http 메소드의 두번째 인자로 넘겨주는 콜백함수의 매개변수 2개
// 첫번째 매개변수 : request 객체 (요청)
// 두번째 매개변수 : response 객체 (응답)

// localhost:8000/test
app.get("/test", function (req, res) {
  //   res.send("<div style='color: red'> 안녕 </div>");
  console.log(__dirname); // C:\Users\Spreatics\Desktop\lecture\sesac-ys2-workspace\node-backend\01-exprees
  res.sendFile(__dirname + "/index.html");
  //   res.sendFile("./index.html");
});

// localhost:8000/ejs
app.get("/ejs", function (req, res) {
  // render 메소드의 기본 dir "./views/"
  // res.render("index");
  res.render("test/index");
});

app.get("/lily", function (req, res) {
  res.render("lily", {
    name: "lily",
    product: ["운동화", "후드집업", "스웨터"],
  });
});

// 서버를 연다.
// localhost:8000
// 127.0.0.1:8000
app.listen(PORT, function () {
  console.log(`server open ${PORT}`);
});
