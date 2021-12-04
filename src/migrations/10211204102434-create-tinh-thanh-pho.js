"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TinhThanhPhos", {
      matp: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(5),
      },
      name: {
        type: Sequelize.STRING(100),
      },
      type: {
        type: Sequelize.STRING(30),
      },
      slug: {
        type: Sequelize.STRING(30),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("TinhThanhPhos");
  },
};
