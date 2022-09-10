require("dotenv").config();
const mysql = require("mysql2/promise");

async function main() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    });

    const userId = "Mariano";
    const [results, fields] = await connection
        .query("SELECT * FROM usuarios WHERE nombre = " + connection.escape(userId));
    console.log(results);
    await connection.execute("INSERT INTO usuarios (nombre, apellido, edad, password) VALUES ('Tito', 'Elpepe', 21, 'asdfjkl')");

    connection.end();
};

main();