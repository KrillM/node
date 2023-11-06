const session = require('express-session')
const express = require('express')
const router = require("./routes")
const app = express()
const port = 8000

app.set('view engine', 'ejs')
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
}))

app.use("/", router);

app.get("*", function(req, res){
    res.send("이게 무슨 주소고? 개 킹받누!");
})

app.listen(port, function(){
    console.log(`주소는 localhost:${port}`);
})