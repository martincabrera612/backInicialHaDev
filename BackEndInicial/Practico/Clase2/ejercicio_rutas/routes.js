function router(route) {
    switch (route) {
        case "/productos":
            {
                return "PRODUCTOS";
                break;
            }
        case "/":
            {
                return "HOME";
                break;
            }
        case "/contacto":
            {
                return "CONTACTO";
                break;
            }
        default:
            {
                return "Error 404";
                break;
            }
    }
}

module.exports = router;