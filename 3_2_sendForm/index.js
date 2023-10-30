const express = require("express");
const app = express();
const port=5555;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// localhost:8000 url 접속에 대한 응답을 위해 만든 코드이다.
app.get("/", function(req, res){
    res.render("index1.ejs");
})

app.get("/ajax", function(req, res){
    console.log(req.query);
    res.send(req.query);
})

app.post("/ajax", function(req, res){
    console.log(req.body);
    res.send(req.body);
})

app.get("/axios", function(req, res){
    console.log(req.query);
    res.send(req.query);
})

app.post("/axios", function(req, res){
    console.log(req.body);
    res.send(req.body);
})

app.get("/fetch", function(req, res){
    console.log(req.query);
    res.send(req.query);
})

app.post("/fetch", function(req, res){
    console.log(req.body);
    res.send(req.body);
})


app.listen(port, function(){
    console.log(`주소는 http://localhost:${port} 입니다.`)
})