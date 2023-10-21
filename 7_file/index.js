const express = require("express");
const app = express();
const port=9000;
const multer = require("multer");

// upload 함수는 multer를 통해 미들웨어로 활용이 가능
const upload=multer({
    dest: "files/"
});

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", function(req, res){
    res.render("index.ejs");
})

// single() is one of the middleware. 
// the file, which `name` is `userfile`, save a file by multer's settings and create 'req.file' object and send to next function.
// multer create name through uuid. (even omit file type)
app.post("/upload", upload.single("userfile"), function(req, res){
    console.log("file: ", req.file); // file uploaded through here
    console.log("body: ", req.body); // rest
    res.send("file uploaded!");
})

app.listen(port, function(){
    console.log(`주소는 http://localhost:${port} 입니다.`)
})