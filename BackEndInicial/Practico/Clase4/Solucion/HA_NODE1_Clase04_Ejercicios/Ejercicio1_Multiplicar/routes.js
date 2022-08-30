const express = require("express");

// importamos los handlers que estan en otro archivo
// como podria importar los handlers directamente? 🤔
const pagesController = require("./controllers/pagesController");

// Opa! Esto es nuevo: http://expressjs.com/en/guide/routing.html
// Al final de la pagina esta la documentacion sobre express.Router
// En resumen, nos permite crear el router desde este archivo SIN la necesidad de crear una funcion que
// reciba la APP.
const router = express.Router();

// Registramos las rutas y usamos los handlers del archivo pageController
router.get("/", pagesController.showHome);
router.get("/multiplicar", pagesController.showMultiply);

// Exportamos el router creado
module.exports = router;
