const home = (req, res) => {
    res.render("home", { root: "./views" });

};

const getUsuarios = (req, res) => {
    res.render("crearUsuario", { root: "./views" });;
};


const postUsuarios = (req, res) => {
    res.send("postUsuario");
};


const eliminar = (req, res) => {
    res.send("Eliminar");
};


const modificar = (req, res) => {
    res.send("modificar");
};

module.exports = {
    home,
    getUsuarios,
    postUsuarios,
    eliminar,
    modificar
};