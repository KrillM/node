const express=require("express");
const router = express.Router();
const ctrl = require("../controller/cmain")

router.get("/", ctrl.main)

module.exports=router;