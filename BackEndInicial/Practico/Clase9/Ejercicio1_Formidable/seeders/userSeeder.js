const { User } = require("../models");

module.exports = async () => {
  const users = [];

  users.push({
    firstname: "María",
    lastname: "Pérez",
    avatar: "avatar_1.png",
  });

  users.push({
    firstname: "Juan",
    lastname: "López",
    avatar: "avatar_2.png",
  });

  users.push({
    firstname: "Victoria",
    lastname: "Gómez",
    avatar: "avatar_3.png",
  });

  users.push({
    firstname: "Pedro",
    lastname: "Rodríguez",
    avatar: "avatar_4.png",
  });

  await User.bulkCreate(users);

  console.log("[Database] Se corrió el seeder de Users.");
};
