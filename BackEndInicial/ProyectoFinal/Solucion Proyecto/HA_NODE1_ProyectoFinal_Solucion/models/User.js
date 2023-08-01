const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {
    static async hashPassword(password) {
      return await bcrypt.hash(password, 10);
    }

    static async verifyCredentials(email, password) {
      const user = await User.findOne({
        where: { email },
      });
      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          return user;
        }
      }
      return null;
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 15],
          isAlpha: true,
        },
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 15],
          isAlpha: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          min: 8,
        },
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return User;
};
