const passport = require("passport");

module.exports = {
  login: passport.authenticate("local", {
    successRedirect: "admin/ofertas",
    failureRedirect: "/",
    failureFlash: true,
  }),

  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  },
};
