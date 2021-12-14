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
      "tinhthanhphos",
      [
        {
          matp: "01",
          name: "Thành phố Hà Nội",
          type: "Thành phố Trung ương",
          slug: "HANOI",
        },
        {
          matp: "48",
          name: "Thành phố Đà Nẵng",
          type: "Thành phố Trung ương",
          slug: "DANANG",
        },
        {
          matp: "52",
          name: "Tỉnh Bình Định",
          type: "Tỉnh",
          slug: "BINHDINH",
        },
        {
          matp: "56",
          name: "Tỉnh Khánh Hòa",
          type: "Tỉnh",
          slug: "KHANHHOA",
        },
        {
          matp: "74",
          name: "Tỉnh Bình Dương",
          type: "Tỉnh",
          slug: "BINHDUONG",
        },
        {
          matp: "75",
          name: "Tỉnh Đồng Nai",
          type: "Tỉnh",
          slug: "DONGNAI",
        },
        {
          matp: "77",
          name: "Tỉnh Bà Rịa - Vũng Tàu",
          type: "Tỉnh",
          slug: "BARIAVUNGTAU",
        },
        {
          matp: "79",
          name: "Thành phố Hồ Chí Minh",
          type: "Thành phố Trung ương",
          slug: "HOCHIMINH",
        },
        {
          matp: "92",
          name: "Thành phố Cần Thơ",
          type: "Thành phố Trung ương",
          slug: "CANTHO",
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
    await queryInterface.bulkDelete("tinhthanhphos", null, {});
  },
};
