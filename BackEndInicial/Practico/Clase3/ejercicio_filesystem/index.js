const express = require("express");
const fs = require("fs");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");

const app = express();


app.get("/", (req, res) => {
    const fecha = format(
        new Date(),
        " dd 'de' MMMM 'de' yyyy 'a las' HH:mm:ss  (EEEE)  ", {
            locale: es,
        }
    );
    const texto = `Se llamo al servidor el ${fecha} \n`;

    fs.appendFile("access_log.txt", texto, (err) => {
        if (err) {
            console.log(err);
            res.send("Ocurrio un error");

        } else {
            console.log("Se registro el acceso al servidor");
            res.send("Alguien accedio al servidor");
        }
    });
});


app.listen(8000, () => {
    console.log("Servidor corriendo en http://localhost:8000");
});