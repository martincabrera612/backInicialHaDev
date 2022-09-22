module.exports = {
    home: async(req, res) => {
        res.render("index", { usuarios: "usuarios" });
    },
    index: async(req, res) => {
        const users = User.findAll();
        res.render("users", { users });
    },

    store: async(req, res) => {
        res.redirect("/usuarios");
    }


};