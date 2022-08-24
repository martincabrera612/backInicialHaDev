const http = require("http");
const fs = require("fs");

let cont = 0;
const server = http.createServer((req, res) => {
    fs.appendFile("txt/ejemplo.txt", `Nueva Linea numero: ${cont} \n`, (err) => {
        if (err) {
            res.end("Hubo un problema al escribir el archivo");
            console.log(err);
        } else {
            cont++;
            res.end("Se escribio el archivo");

        };
    });
});

const puerto = 8080;

server.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});