const express=require("express");
const router = express.Router();
const ctrl = require("../controller/controller2.js");

router.get("/", ctrl.main);
router.post("/axios", ctrl.postAxios);
module.exports = router;