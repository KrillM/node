const express=require("express");
const router = express.Router();
const ctrl = require("../controller/controller");

router.get("/", ctrl.homePage);
router.get("/setCookie", ctrl.setCookie);
module.exports=router;