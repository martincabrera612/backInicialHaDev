const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Se creo el servidor");

});


const puerto = 8080;

server.listen(puerto, () => {
    console.log("Servidor escuchando en http://localhost:" + puerto);
});