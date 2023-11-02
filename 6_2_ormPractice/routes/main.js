const express=require("express");
const router = express.Router();
const ctrl = require("../controller/ctrl.js");

// 홈페이지 주소
router.get("/", ctrl.homePage);

// 회원가입 툴
router.get("/sign-up", ctrl.signUpPage);
router.post("/sign-up", ctrl.signUpProcess);

// 로그인 기능 구현
router.post("/login", ctrl.loginProcess);

// 프로필 화면
router.post("/profile", ctrl.profilePage);
router.patch("/profile/update", ctrl.profileUpdateProcess);
router.delete("/profile/delete/:id", ctrl.profileDelete);

module.exports=router;