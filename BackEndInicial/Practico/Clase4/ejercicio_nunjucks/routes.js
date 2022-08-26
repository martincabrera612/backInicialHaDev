const handlers = require("./pagesController");


function router(app) {

    app.get("/", handlers.home);
    app.get("/productos", handlers.products);
    app.get("/sobre-nosotros", handlers.about);
    app.get("/contacto", handlers.contacto);
}




module.exports = router;