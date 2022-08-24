const http = require("http");
const router = require("./routes");

//OPCION 1
// const server = http.createServer(router);


//Opcion 2

const server = http.createServer((req, res) => {
    const ruta = req.url;

    if (ruta === "/productos") {
        res.end("Productos");
    }
    if (ruta === "/") {
        res.end("Home");
    }
    if (ruta === "/contacto") {
        res.end("CONTACTO");
    }

});



const puerto = 8000;
server.listen(8000, () => {

    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});