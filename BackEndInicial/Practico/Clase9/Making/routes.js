const express = require("express");
const router = express.Router();
const userController = require("./controller/userController");

router.get("/", userController.home);
router.get("/usuarios", userController.index);
router.post("/usuarios", userController.store);



module.exports = router;