const home = (req, res) => {
    res.render("home", { root: "./views" });

};

module.exports = { home };