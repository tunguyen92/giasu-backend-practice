"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "datlops",
      [
        {
          nguoiHocId: 1,
          giaSuId: 1,
          createdAt: "2021-12-06 09:44:24",
          updatedAt: "2021-12-06 09:44:24",
        },
        {
          nguoiHocId: 2,
          giaSuId: 1,
          createdAt: "2021-12-06 09:44:24",
          updatedAt: "2021-12-06 09:44:24",
        },
        {
          nguoiHocId: 3,
          giaSuId: 1,
          createdAt: "2021-12-06 09:44:24",
          updatedAt: "2021-12-06 09:44:24",
        },
        {
          nguoiHocId: 1,
          giaSuId: 2,
          createdAt: "2021-12-06 09:44:24",
          updatedAt: "2021-12-06 09:44:24",
        },
        {
          nguoiHocId: 3,
          giaSuId: 2,
          createdAt: "2021-12-06 09:44:24",
          updatedAt: "2021-12-06 09:44:24",
        },
        {
          nguoiHocId: 3,
          giaSuId: 3,
          createdAt: "2021-12-06 09:44:24",
          updatedAt: "2021-12-06 09:44:24",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("datlops", null, {});
  },
};
