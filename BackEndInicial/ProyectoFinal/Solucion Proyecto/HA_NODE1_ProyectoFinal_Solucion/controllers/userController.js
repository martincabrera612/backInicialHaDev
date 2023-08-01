const { User } = require("../models");

module.exports = {
  // Completar...
  index: async (req, res) => {
    const user = req.user;
    const users = await User.findAll();
    res.render("admin/users", { users, user });
  },
  store: async (req, res) => {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email: req.body.email },
        defaults: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          password: await User.hashPassword(req.body.password),
        },
      });
  
      if (created) {
        // req.login es provisto por passport
        req.login(user, function (err) {
          if (err) return next(err);
          res.redirect("/admin/usuarios");
        });
      } else {
        // chiche para mostrar mensajes en la pagina
        req.flash("error", "Lo sentimos, el usuario ya existe en el sistema.");
        res.redirect("back");
      }
    } catch (error) {
      const messages = [];
      error.errors.forEach((error) => {
        messages.push(error.message);
      });
      req.flash("errors", messages);
      res.redirect("back");
    }
  },
  create: async (req, res) => {
    const user = req.user;
    res.render("admin/newUser", { user });
  },

  edit: async (req, res) => {
    const userToEdit = await User.findByPk(req.params.id);
    const user = req.user;

    res.render("admin/editUser", { userToEdit, user });
  },

  update: async (req, res) => {
    const user = await User.findByPk(req.params.id);

    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email; // Validar que el email no este ocupado

    await user.save();

    res.redirect("/admin/usuarios");
  },

  destroy: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.redirect("/admin/usuarios");
  },
};
