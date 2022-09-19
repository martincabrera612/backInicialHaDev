const fs = require("fs");
const path = require("path");
const { User } = require("../models");
const formidable = require("../lib/formidable");

module.exports = {
  index: async (req, res) => {
    const users = await User.findAll();
    res.render("users", { users });
  },

  create: (req, res) => {
    res.render("createUser");
  },

  store: async (req, res) => {
    const { fields, files } = await formidable(req, {
      multiples: false,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });

    const userData = {
      firstname: fields.firstname,
      lastname: fields.lastname,
      avatar: null, // Por defecto el avatar va a ser null
    };

    // Cuando no se sube ningun archivo Formidable crea uno vacio. 🤷‍♂️
    if (files.avatar.name === "") {
      // lo eliminamos
      fs.unlink(files.avatar.path, () => {});
    } else {
      userData.avatar = path.basename(files.avatar.path); // actualizamos el avatar del userData
    }

    await User.create(userData); // <== en lugar de construir el objeto aca, lo construi en la linea 23 😉

    res.redirect("/usuarios");
  },

  show: (req, res) => {},

  edit: (req, res) => {},

  update: async (req, res) => {},

  destroy: async (req, res) => {},
};
