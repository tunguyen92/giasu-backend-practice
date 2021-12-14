"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("QuanHuyens", {
      maqh: {
        allowNull: false,
        type: Sequelize.STRING(5),
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(100),
      },
      type: {
        type: Sequelize.STRING(30),
      },
      matp: {
        type: Sequelize.STRING(5),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("QuanHuyens");
  },
};
