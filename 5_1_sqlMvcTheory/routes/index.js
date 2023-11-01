const express=require("express");
const router = express.Router(); // 하나의 미들웨어로 사용할 라우터, 라우터들을 모아두는 객체
const ctrl = require("../controller/Cvisitor.js");

router.get("/", ctrl.homePage);
router.get("/visitors", ctrl.visitor);

// 방명록 등록
router.post("/visitor", ctrl.postVisitor);

// 방명록 삭제
router.delete("/visitor/:id", ctrl.deleteVisitor);

// 선택한 방명록 조회
router.get("/visitor/:id", ctrl.getVisitorById)

// 방명록 수정
router.patch("/visitor", ctrl.updateVisitor);

module.exports = router; // 모듈 밖으로 라우터를 넘겨주어야 사용이 가능하다.