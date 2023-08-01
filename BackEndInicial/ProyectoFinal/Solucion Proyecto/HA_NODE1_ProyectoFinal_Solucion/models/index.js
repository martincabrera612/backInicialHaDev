const { Sequelize, Model, DataTypes } = require("sequelize");

const UserBuilder = require("./User");
const JobBuilder = require("./Job");

const options = {
  host: process.env.DB_HOST,
  dialect: process.env.DB_CONNECTION,
  logging: false,
};

if (process.env.DB_CONNECTION === "postgres") {
  options.dialectModule = require("pg");
}

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  options
);

const User = UserBuilder(sequelize, Model, DataTypes);
const Job = JobBuilder(sequelize, Model, DataTypes);

module.exports = {
  sequelize,
  Job,
  User,
};
