const express = require("express");
const session = require('express-session')
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
}))

const router = require("./routes");
app.use("/", router);
const routerCrews = require("./routes/crews");
app.use("/crew", routerCrews);

app.get("*", function (req, res) {
  res.render("404");
});

app.listen(port, function () {
  console.log(`주소는 localhost:${port} 입니다.`);
});
