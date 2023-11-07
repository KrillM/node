const express = require("express");
const path = require('path');
const app = express();
const dotenv = require('dotenv');

const ps = process.env;

//index.js와 같은 위치에 있는 .env파일을 불러와 하나의 환경변수로 사용할 수 있게금 함.
// cross-env 배포버전, 개발버전에 따라 다른 env 파일을 업로드 할 수 있게 도와준다.
dotenv.config({ path: path.join(__dirname, `./config/envs/.env`) });
dotenv.config({ path: path.join(__dirname, `./config/envs/${ps.NODE_ENV}.env`) });

console.log(ps.PASSWORD);

app.get("/", function (req, res) {
  res.send(ps.TEST_VAR);
});

app.listen(ps.PORT, function () {
  console.log(`주소는 localhost:${ps.PORT} 입니다.`);
});
