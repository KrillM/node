const express=require("express");
const router = express.Router();
const ctrl = require("../controller/controller.js");

router.get("/", ctrl.homePage);
router.get("/crews", ctrl.crew);

router.post("/logining", ctrl.logInHaranMariya);
router.post("/crew", ctrl.addCrew);
router.delete("/crew/:id", ctrl.deleteCrew);

module.exports = router;