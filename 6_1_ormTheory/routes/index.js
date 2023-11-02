const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// ~~~~~:8000 -> index.ejs render
router.get("/", controller.home);

// ~~~~~:8000/visitor -> visitor.ejs render
router.get("/visitors", controller.visitor);

// 방명록 등록
router.post("/visitor", controller.postVisitor);

// 방명록 수정
router.patch("/visitor", controller.patchVisitor);

// 방명록 하나 조회
router.get("/visitor/:id", controller.getVisitorById);
// 방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);

router.get("/sign-up", controller.signUpPage);
router.post("/sign-up", controller.signUpProcess);

router.get("/login", controller.homePage);
router.post("/login", controller.loginProcess);

router.post("/profile", controller.profilePage);
router.patch("/profile/update/:id", controller.profileUpdateProcess);
router.delete("/profile/delete/:id", controller.profileDelete);

module.exports = router;
