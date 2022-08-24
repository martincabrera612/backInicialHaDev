const handlers = require("./pagesController");

const router = (app) => {
    app.get("/", handlers.home);
    app.get("/productos", handlers.productos);
    app.get("/sobre-nosotros", handlers.about);
    app.get("/contacto", handlers.contacto);
}

module.exports = router;