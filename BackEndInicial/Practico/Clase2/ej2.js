const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    fs.writeFile("txt/ejemplo.txt", "Hola desde Node\n", (err) => {
        if (err) {
            res.end("Hubo un problema al crear el archivo");
            console.log(err);
        } else {
            res.end("Se cree el archivo");
        };
    });
});

const puerto = 8080;

server.listen(puerto, () => {
    console.log("Servidor escuchando en http://localhost:" + puerto);
});