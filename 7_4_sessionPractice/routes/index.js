const express=require("express");
const router = express.Router();
const ctrl = require("../controller/controller");

router.get("/", ctrl.homePage);
router.get("/login", ctrl.login);
router.get("/logout", ctrl.logout);
module.exports=router;