const db = require("../db");


module.exports = {
    index: async(req, res) => {
        const users = await db.customQuery("SELECT * FROM users", []);
        res.render("users", { users });
    },

    store: async(req, res) => {
        await db.customQuery("INSERT INTO users (firstname, lastname, age) VALUES  (?,?,?) ", [req.body.firstname, req.body.lastname, req.body.age]);
        res.redirect("/usuarios");
    },

};