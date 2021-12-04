"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("XaPhuongThiTrans", {
      xaid: {
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
      maqh: {
        type: Sequelize.STRING(5),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("XaPhuongThiTrans");
  },
};
