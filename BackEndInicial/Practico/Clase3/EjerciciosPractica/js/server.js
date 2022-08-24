const express = require("express");
const router = require("./routes.js");


const app = express(); //instancio express
console.log(__dirname);
router(app);


app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
})