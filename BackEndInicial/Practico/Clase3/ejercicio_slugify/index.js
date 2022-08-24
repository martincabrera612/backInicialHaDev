const slugify = require("slugify");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    let str = "Quiero viajar a Bélgica & España!🇧🇪 🇪🇸 "
    const resultado = slugify(str, {
        replacement: '-', // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
        locale: 'es', // language code of the locale to use
        trim: true
    });
    console.log(resultado);
    res.end(resultado);
});

app.listen(8000, () => {
    console.log("Servidor esuchando en http://localhost:8000");
});