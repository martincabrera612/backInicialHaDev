const express = require("express");

const app = express(); // Creo una instancia de express 

const ruta = "/";

const homeHandler = (req, res) => {
    res.send("Esta es la pagina de home");
}

function productsHandler(req, res) {
    res.sendFile(__dirname + "/productos.html");
}
//app.get("/", (req, res) => res.send("Hola Hack Academy"));

app.get(ruta, homeHandler);

app.get("/productos", productsHandler);


app.listen(8000, () => {
    console.log("Servidor corriendo en http://localhost:8000");
});