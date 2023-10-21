const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path"); // 파일 경로를 받았을 때, 그 조작을 도와준다. ex. 확장자를 가져오거나 파일이름을 추출한다.
const port=9000;

// upload 함수는 multer를 통해 미들웨어로 활용이 가능
const upload=multer({
    dest: "files/"
});

// 위의 미들웨어와의 차이점은?
const uploadDetails=multer({
    storage: multer.diskStorage({
        destination: function(req, file, done){ // 위의 코드처럼 약자 사용 불가
            done(null, "files/");
        },
        filename: function(req, file, done){
            console.log(file)
            const ext = path.extname(file.originalname); // 파일의 확장자 이름
            const basename = path.basename(file.originalname, ext); // 파일의 원래 이름
            const fileName = basename+"_"+Date.now()+ext;
            done(null, fileName);
        }
    }),
    limits: {fileSize: 5*1024*1024} // 5mb 제한
})

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", function(req, res){
    res.render("index.ejs");
})


// file middleware. single() {req.file(), upload only one file}, array(), fields() {req.files(), upload many files}
// the file, which `name` is `userfile`, save a file by multer's settings and create 'req.file' object and send to next function.
// multer create name through uuid. (even omit file type) unlike basic set of multer, uploadDetails function make us happy
app.post("/upload", uploadDetails.single("userfile"), function(req, res){
    console.log("file: ", req.file); // file uploaded through here
    console.log("body: ", req.body); // rest
    res.send("file uploaded!");
})

app.listen(port, function(){
    console.log(`주소는 http://localhost:${port} 입니다.`)
})