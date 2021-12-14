"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DatLops", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nguoiHocId: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        references: {
          model: "NguoiHocs",
          key: "id",
        },
      },
      giaSuId: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        references: {
          model: "GiaSus",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("DatLops");
  },
};
