/**
 * Los seeds se corren con el comando: `npx sequelize-cli db:seed:all`.
 *
 * ⚠️ Es necesario crear el modelo `Job` antes de poder ejectuar este seed.
 */

"use strict";

const { Job } = require("../models");
const slugify = require("slugify");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const job1 = await Job.create({
      title: "Programador JavaScript Junior",
      slug: slugify("Programador JavaScript Junior"),

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company: "ACME S.A.",
      city: "Montevideo",
      applyEmail: "hola@ha.dev",
      featured: true,
      image: "avatar_1.png",
    });

    const job2 = await Job.create({
      title: "Diseñador UI/UX",
      slug: slugify("Diseñador UI/UX"),

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company: "ACME S.A.",
      city: "Buenos Aires",
      applyEmail: "hola@ha.dev",
      featured: true,
      image: "avatar_1.png",
    });

    const job3 = await Job.create({
      title: "Experto en React.js",
      slug: slugify("Experto en React.js"),

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company: "ACME S.A.",
      city: "Bogotá",
      applyEmail: "hola@ha.dev",
      featured: true,
      image: "avatar_1.png",
    });

    const job4 = await Job.create({
      title: "Project Manager Senior",
      slug: slugify("Project Manager Senior"),

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company: "ACME S.A.",
      city: "Santiago",
      applyEmail: "hola@ha.dev",
      featured: false,
      image: "avatar_1.png",
    });

    const job5 = await Job.create({
      title: "Data Scientist",
      slug: slugify("Data Scientist"),

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company: "ACME S.A.",
      city: "Quito",
      applyEmail: "hola@ha.dev",
      featured: false,
      image: "avatar_1.png",
    });

    const job6 = await Job.create({
      title: "Maquetador Senior",
      slug: slugify("Maquetador Senior"),

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company: "ACME S.A.",
      city: "Lima",
      applyEmail: "hola@ha.dev",
      featured: true,
      image: "avatar_1.png",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("jobs", null, {});
  },
};
