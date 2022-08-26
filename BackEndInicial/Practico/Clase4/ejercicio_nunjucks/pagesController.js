const { format } = require("date-fns");
const { es } = require("date-fns/locale")

function fechaTexto() {
    const fecha = format(
        new Date(),
        "EEEE", { locale: es }
    );
    let texto = ""
    const finde = ["sabado", "domingo"];
    if (finde.includes(fecha.toLowerCase())) {
        texto = "fin de semana";
    } else {
        texto = "un dia de semana";
    }

    return texto;
}

const home = (req, res) => {
    let texto = fechaTexto();
    res.render("index.njk", { texto: texto });
}

const products = (req, res) => {
    const lista = ["Notebook", "iPad", "Kindle", "Monitor", "Xbox series s"];
    res.render("productos.njk", { lista: lista });
}
const about = (req, res) => {
    res.send("about");
}

const contacto = (req, res) => {
    res.send("contacto");
}


module.exports = {
    home,
    products,
    about,
    contacto
};