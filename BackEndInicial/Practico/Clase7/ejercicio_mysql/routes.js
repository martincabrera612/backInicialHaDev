const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const handlers = require("./controllers/controllers");

router.get("/", handlers.home);
router.get("/usuarios", userController.index);
router.post("/usuarios", userController.store);
router.get("/usuarios/eliminar/:id", handlers.destroy);
router.post("/usuarios/modificar", userController.update);

module.exports = router;