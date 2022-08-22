const http = require("http");

const server = http.createServer((req, res) => {

});


const puerto = 8000;
server.listen(8000, () => {

    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});