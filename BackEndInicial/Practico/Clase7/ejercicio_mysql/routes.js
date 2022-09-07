const express = require("express");
const router = express.Router();
const handlers = require("./controllers/controllers");

router.get("/", handlers.home);
router.get("/usuarios", handlers.getUsuarios);
router.post("/usuarios", handlers.postUsuarios);
router.get("/usuarios/eliminar/", handlers.eliminar);
router.post("/usuarios/modificar", handlers.modificar);

module.exports = router;