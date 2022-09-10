const express = require("express");
const app = express();

const middleware = (req, res, next) => {
    console.log("Desde el middleware");
    //puedo alterar valores antes de que llegen a la siguiente funcion
    req.query.num1 = "Hola mundo";
    next();
}

const homeController = (req, res) => {
    console.log("Desde la funcion homeController");
    res.send(`El texto que agrego el middleware es: ${req.query.num1}`);
};

app.get("/", middleware, homeController);

app.listen(3000);