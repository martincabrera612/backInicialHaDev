const { Sequelize, Model, DataTypes } = require("sequelize");

const UserBuilder = require("./User");

const options = {
  host: process.env.DB_HOST,
  dialect: process.env.DB_CONNECTION,
  logging: false,
};

if (process.env.DB_CONNECTION === "postgres") {
  options.dialectModule = require("pg"); // Necesario para que funcione en Vercel.
}

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  options
);

const User = UserBuilder(sequelize, Model, DataTypes);

module.exports = {
  sequelize,
  User,
};
