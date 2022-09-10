require("dotenv").config();
const nunjucks = require("nunjucks");
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

nunjucks.configure("views", {
    autoescape: true,
    express: app,
});

app.set("view engine", "njk");

app.use(routes);

app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:3000`);
});