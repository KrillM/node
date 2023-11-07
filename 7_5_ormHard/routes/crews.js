const express = require("express");
const router = express.Router();
const controller = require("../controller/Crews");

router.get("/sign-up", controller.signUpPage);
router.post("/sign-up", controller.signUpProcess);

router.get("/login", controller.loginPage);
router.post("/login", controller.loginProcess);

router.post("/profile", controller.profilePage);
router.patch("/profile/update/:id", controller.profileUpdateProcess);
router.delete("/profile/delete/:id", controller.profileDelete);
router.delete("/logout", controller.logoutProcess);

module.exports = router;
