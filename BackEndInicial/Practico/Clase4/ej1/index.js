const nunjucks = require("nunjucks");
const express = require("express");
const router = require("./routes");
const { ppid } = require("process");
const app = express();

nunjucks.configure("views", {
    autoescape: true,
    express: app,
})

app.set("view engine", "njk");
router(app);

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
})