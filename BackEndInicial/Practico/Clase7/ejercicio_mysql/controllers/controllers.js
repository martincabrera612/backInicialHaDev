const home = (req, res) => {
    res.render("home", { root: "./views" });

};




const postUsuarios = (req, res) => {
    res.send("postUsuario");
};


const destroy = (req, res) => {
    res.send("Eliminar");
};


const update = (req, res) => {
    res.send("modificar");
};

module.exports = {
    home,
    getUsuarios,
    postUsuarios,
    eliminar,
    modificar
};