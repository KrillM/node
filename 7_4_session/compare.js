const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session");

app.use(
  session({
    secret: "secret key",
    resave: false, // 모든 요청마다 session을 다시 저장할 거냐?
    saveUninitialized: true, // 클라이언트가 처음 접속할 때, 세션을 한 번 초기화 할 건지 말건지?
    cookie: {
      httpOnly: true, // document.cookie로는 접속 X
      maxAge: 30000,
    },
    // secure: true // https 에서만 동작하도록 함.
  })
);

app.get("/", (req, res) => {
  res.render("index", { user: req.session.user });
});

app.get("/set", (req, res) => {
  console.log("1 : ", req.session);
  //   로그인 성공한 시점에 req.session.user 에 user를 식별할 수 있는 고유한 값
  req.session.user = "lily";
  console.log("2 : ", req.session);
  res.send("set session");
});

app.get("/get", (req, res) => {
    if(req.session.user) {
        res.render("profile", {})
    } else {
        res.redirect("/login")
    }
  console.log("user : ", req.session.user);
  res.send({ user: req.session.user });
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});