const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_test",
});

connection.connect((err) => {
    if (!err) {
        console.log("Nos conectamos a la base de datos");
    } else {
        console.log(err);
    }
})

connection.query("Select * FROM usuarios", function(err, usuarios) {
    if (err) throw err;
    console.log(usuarios);

});

connection.end();