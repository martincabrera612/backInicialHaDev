const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    let cont = 0;
    fs.appendFile("txt/ejemplo.txt", `Nueva Linea numero: ${cont} \n`, (err) => {
        cont++;
        if (err) {
            res.end("Hubo un problema al escribir el archivo");
            console.log(err);
        } else {
            res.end("Se escribio el archivo");
        };
    });
});

const puerto = 8080;

server.listen(puerto, () => {
    console.log("Servidor escuchando en http://localhost:" + puerto);
});