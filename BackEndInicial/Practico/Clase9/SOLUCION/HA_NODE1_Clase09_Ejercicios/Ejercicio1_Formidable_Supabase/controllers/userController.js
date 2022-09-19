const fs = require("fs");
const path = require("path");
const { User } = require("../models");

const formidable = require("../lib/formidable");
const supabase = require("../lib/supabase");

module.exports = {
  index: async (req, res) => {
    users = await User.findAll();
    res.render("users", { users });
  },

  create: (req, res) => {
    res.render("createUser");
  },

  store: async (req, res) => {
    const { fields, files } = await formidable(req, {
      multiples: false,
      keepExtensions: true,
    });

    const userData = {
      firstname: fields.firstname,
      lastname: fields.lastname,
      avatar: null, // Por defecto el avatar va a ser null
    };

    // Cuando no se sube ningun archivo Formidable crea uno vacio. 🤷‍♂️
    if (files.avatar.name === "") {
      fs.unlink(files.avatar.path, () => {});
    } else {
      const ext = path.extname(files.avatar.path);
      const newFileName = `image_${Date.now()}${ext}`;

      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(newFileName, fs.createReadStream(files.avatar.path), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.avatar.type,
        });
      userData.avatar = newFileName;
    }

    await User.create(userData); // <== en lugar de construir el objeto aca, lo construi en la linea 23 😉

    res.redirect("/usuarios");
  },

  show: (req, res) => {},

  edit: (req, res) => {},

  update: async (req, res) => {},

  destroy: async (req, res) => {},
};
