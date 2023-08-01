const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const redirectIfAuthenticated = require("../middlewares/redirectIfAuthenticated");

router.get("/", pagesController.showHome);
router.get("/trabajos", pagesController.showJobs);
router.get("/trabajos/:slug", pagesController.showJob);

router.get("/login", redirectIfAuthenticated, pagesController.showLogin);
router.get("/register", redirectIfAuthenticated, pagesController.showRegister);

router.get("/logout", authController.logout);
// POST
router.post("/login", authController.login);
router.post("/register", userController.store);

module.exports = router;
