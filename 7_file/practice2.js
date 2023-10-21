const express = require("express");
const multer = require("multer");
const path = require("path"); 
const app = express();
const port=10001;

app.set("view engine", "ejs");
app.use("/files", express.static(__dirname+"/files"))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const uploadDetails=multer({
    storage: multer.diskStorage({
        destination: function(req, file, done){
            done(null, "files/");
        },
        filename: function(req, file, done){
            console.log(file)
            const ext = path.extname(file.originalname); 
            const basename = path.basename(file.originalname, ext); 
            const fileName = req.body.name+"_"+basename+"_"+Date.now()+ext;
            done(null, fileName);
        }
    }),
    limits: {fileSize: 5*1024*1024}
})

app.get("/", function(req, res){
    res.render("practice2.ejs");
})

app.post("/upload/dynamic", uploadDetails.single("userfile"), function(req, res){
    res.send({
        src: req.file.path,
        name: req.body.name,
        number: req.body.number,
        age: req.body.age
    })
})

app.listen(port, function(){
    console.log(`주소는 http://localhost:${port} 입니다.`)
})