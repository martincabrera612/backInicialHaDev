const products = require("../data/products");
const { isWeekend } = require("date-fns");

module.exports = {
  showHome: (req, res) => {
    const today = new Date();
    // https://date-fns.org/v2.29.2/docs/isWeekend#usage
    const dayMessage = isWeekend(today)
      ? "Hoy es fin de semana."
      : "Hoy es un día de semana.";

    res.render("home", {
      dayMessage,
    });
  },
  showProducts: (req, res) => {
    res.render("products", { products });
  },
  showAboutUs: (req, res) => {
    res.render("about");
  },
  showContact: (req, res) => {
    res.render("contact");
  },
};
