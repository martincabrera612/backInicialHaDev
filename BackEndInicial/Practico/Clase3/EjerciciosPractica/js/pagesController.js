const home = (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
};

const productos = (req, res) => {
    res.sendFile(__dirname + "/html/productos.html");
}

const about = (req, res) => {
    res.sendFile(__dirname + "/html/about.html");
}
const contacto = (req, res) => {
    res.sendFile(__dirname + "/html/contacto.html");
}

module.exports = {
    home,
    productos,
    about,
    contacto
};