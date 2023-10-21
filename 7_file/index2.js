const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const port=9000;

app.use("/files", express.static(__dirname+"/files"))

const uploadDetails=multer({
    storage: multer.diskStorage({
        destination: function(req, file, done){ 
            done(null, "files/");
        },
        filename: function(req, file, done){
            console.log(file)
            const ext = path.extname(file.originalname); 
            const basename = path.basename(file.originalname, ext); 
            const fileName = basename+"_"+Date.now()+ext;
            done(null, fileName);
        }
    }),
    limits: {fileSize: 5*1024*1024}
})

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", function(req, res){
    res.render("index3.ejs");
})

app.post("/upload/dynamic", uploadDetails.single("userfile"), function(req, res){
    res.send({src: req.file.path});
})

app.listen(port, function(){
    console.log(`주소는 http://localhost:${port} 입니다.`)
})