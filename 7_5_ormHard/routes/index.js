const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

router.get("/", controller.home);
router.get("/visitors", controller.visitor);
router.post("/visitor", controller.postVisitor);
router.patch("/visitor", controller.patchVisitor);
router.get("/visitor/:id", controller.getVisitorById);
router.delete("/visitor/:id", controller.deleteVisitor);

module.exports = router;
