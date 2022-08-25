const homeHandler = (req, res) => {
    res.sendFile(__dirname, "/../views/index.html");
}

const productHandler = (req, res) => {
    const resultado = req.query.num1 * req.query.num2;
    res.send(`El resultado es: ${resultado}`);
};

function registerRoutes(app) {
    app.get("/", homeHandler);
    app.get("/multiplicar", productHandler);
};

module.exports = registerRoutes;