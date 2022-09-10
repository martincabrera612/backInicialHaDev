const mysql = require("mysql2/promise");

async function main() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "db_test",
    });
    const name = "; drop database db_test ";
    const query = "SELECT * FROM usuarios WHERE nombre = " + name;
    console.log(query);
    // const [results] = await connection.query(query);

    // console.log(results);
  } catch (error) {
    console.log(error);
  }
}

// Ya que main es una funcion async, sabemos que devuelve una Promise por defecto.
// Lo correcto entonces seria controlar la promesa con .then y .catch :D
main();
