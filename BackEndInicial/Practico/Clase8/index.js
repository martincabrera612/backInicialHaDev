const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    "ha_ejercicio_mysql",
    "root",
    "root", {
        host: "localhost", // 127.0.0.1
        dialect: "mysql" //mysql
    },

);

class User extends Model {}
User.init({
    fullname: DataTypes.STRING,
    birthday: {

        type: DataTypes.DATE,
    },
}, { sequelize: connection, modelName: user });

async function main() {
    await connection.sync({ force: true }) // OJO, EL FORCE TRUE CREA UNA TABLA SI NO EXISTE, Y SI YA EXISTE LA SOBREESCRIBE
    console.log("Sincronizado...");

    const usuariosDeLaBaseDeDatos = await User.findAll();

    const nuevoUsuario = await User.create({
        fullname: "Mariano Zunino",
        birthday: new Date()
    });

    const user = await User.findOne();
    console.log(user.fullname);
    console.log(user.birthday);

}

main();