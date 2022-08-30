const express = require("express");

const router = require("./routes"); // Esto ya no es una funcion, es el router de express

const app = express(); // Crea un instancia de Express.

// Le podemos indicar a express que utilice un router que nosotros creamos
app.use(rutas);

app.listen(3000, () => console.log("¡Servidor corriendo en el puerto 3000!"));
