const http = require("http");
const persona = require("./persona");

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(persona));


});

const puerto = 8000;
server.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
})