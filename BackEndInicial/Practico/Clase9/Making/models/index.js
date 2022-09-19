const { Sequelize, Model, DataTypes } = require("sequelize");
const UserBuilder = require("./users");
const { DataTypes } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: "mysql",
    }
);


const User = UserBuilder(sequelize, Model, DataTypes);

module.exports = {
    sequelize,
    User,
};