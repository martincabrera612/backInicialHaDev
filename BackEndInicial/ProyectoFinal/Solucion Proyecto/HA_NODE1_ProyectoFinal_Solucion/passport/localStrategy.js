const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        session: true, // Para usar sesiones en un browser.
        passReqToCallback: true, // Para usar flash messages.
      },
      /**
       * IMPORTANTE:
       * Al utilizar `passReqToCallback: true` el código superior, la siguiente función lleva 4 parámetros en lugar de 3.
       * Normalmente sólo llevaría `username`, `passwrod` y `done`.
       **/
      function (req, username, password, done) {
        // Este código sólo se llama si username y password están definidos.
        User.verifyCredentials(username, password)
          .then((user) => {
            if (user) {
              done(null, user);
            } else {
              done(null, false, { message: "Credenciales incorrectas" });
            }
          })
          .catch((error) => {
            done(error);
          });
      }
    )
  );
};
