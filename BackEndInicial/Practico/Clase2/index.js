const http = require("http");
const fs = require("fs");
const server = http.createServer(function(req, res) {
    fs.writeFile("ejemplo.txt", "Hola desde node", function(err) {
        console.log("Termino de hacer algo con el archivo");
        console.log(err);
        if (err) {
            res.end("Algo salio mal");
        } else {
            res.end("OK");
        }
    });
});

server.listen(8080, () => {
    console.log("Servidor escuchando en http://localhost:8080");
})