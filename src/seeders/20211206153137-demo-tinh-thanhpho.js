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
          matp: "02",
          name: "Tỉnh Hà Giang",
          type: "Tỉnh",
          slug: "HAGIANG",
        },
        {
          matp: "04",
          name: "Tỉnh Cao Bằng",
          type: "Tỉnh",
          slug: "CAOBANG",
        },
        {
          matp: "06",
          name: "Tỉnh Bắc Kạn",
          type: "Tỉnh",
          slug: "BACKAN",
        },
        {
          matp: "08",
          name: "Tỉnh Tuyên Quang",
          type: "Tỉnh",
          slug: "TUYENQUANG",
        },
        {
          matp: "10",
          name: "Tỉnh Lào Cai",
          type: "Tỉnh",
          slug: "LAOCAI",
        },
        {
          matp: "11",
          name: "Tỉnh Điện Biên",
          type: "Tỉnh",
          slug: "DIENBIEN",
        },
        {
          matp: "12",
          name: "Tỉnh Lai Châu",
          type: "Tỉnh",
          slug: "LAICHAU",
        },
        {
          matp: "14",
          name: "Tỉnh Sơn La",
          type: "Tỉnh",
          slug: "SONLA",
        },
        {
          matp: "15",
          name: "Tỉnh Yên Bái",
          type: "Tỉnh",
          slug: "YENBAI",
        },
        {
          matp: "17",
          name: "Tỉnh Hoà Bình",
          type: "Tỉnh",
          slug: "HOABINH",
        },
        {
          matp: "19",
          name: "Tỉnh Thái Nguyên",
          type: "Tỉnh",
          slug: "THAINGUYEN",
        },
        {
          matp: "20",
          name: "Tỉnh Lạng Sơn",
          type: "Tỉnh",
          slug: "LANGSON",
        },
        {
          matp: "22",
          name: "Tỉnh Quảng Ninh",
          type: "Tỉnh",
          slug: "QUANGNINH",
        },
        {
          matp: "24",
          name: "Tỉnh Bắc Giang",
          type: "Tỉnh",
          slug: "BACGIANG",
        },
        {
          matp: "25",
          name: "Tỉnh Phú Thọ",
          type: "Tỉnh",
          slug: "PHUTHO",
        },
        {
          matp: "26",
          name: "Tỉnh Vĩnh Phúc",
          type: "Tỉnh",
          slug: "VINHPHUC",
        },
        {
          matp: "27",
          name: "Tỉnh Bắc Ninh",
          type: "Tỉnh",
          slug: "BACNINH",
        },
        {
          matp: "30",
          name: "Tỉnh Hải Dương",
          type: "Tỉnh",
          slug: "HAIDUONG",
        },
        {
          matp: "31",
          name: "Thành phố Hải Phòng",
          type: "Thành phố Trung ương",
          slug: "HAIPHONG",
        },
        {
          matp: "33",
          name: "Tỉnh Hưng Yên",
          type: "Tỉnh",
          slug: "HUNGYEN",
        },
        {
          matp: "34",
          name: "Tỉnh Thái Bình",
          type: "Tỉnh",
          slug: "THAIBINH",
        },
        {
          matp: "35",
          name: "Tỉnh Hà Nam",
          type: "Tỉnh",
          slug: "HANAM",
        },
        {
          matp: "36",
          name: "Tỉnh Nam Định",
          type: "Tỉnh",
          slug: "NAMDINH",
        },
        {
          matp: "37",
          name: "Tỉnh Ninh Bình",
          type: "Tỉnh",
          slug: "NINHBINH",
        },
        {
          matp: "38",
          name: "Tỉnh Thanh Hóa",
          type: "Tỉnh",
          slug: "THANHHOA",
        },
        {
          matp: "40",
          name: "Tỉnh Nghệ An",
          type: "Tỉnh",
          slug: "NGHEAN",
        },
        {
          matp: "42",
          name: "Tỉnh Hà Tĩnh",
          type: "Tỉnh",
          slug: "HATINH",
        },
        {
          matp: "44",
          name: "Tỉnh Quảng Bình",
          type: "Tỉnh",
          slug: "QUANGBINH",
        },
        {
          matp: "45",
          name: "Tỉnh Quảng Trị",
          type: "Tỉnh",
          slug: "QUANGTRI",
        },
        {
          matp: "46",
          name: "Tỉnh Thừa Thiên Huế",
          type: "Tỉnh",
          slug: "THUATHIENHUE",
        },
        {
          matp: "48",
          name: "Thành phố Đà Nẵng",
          type: "Thành phố Trung ương",
          slug: "DANANG",
        },
        {
          matp: "49",
          name: "Tỉnh Quảng Nam",
          type: "Tỉnh",
          slug: "QUANGNAM",
        },
        {
          matp: "51",
          name: "Tỉnh Quảng Ngãi",
          type: "Tỉnh",
          slug: "QUANGNGAI",
        },
        {
          matp: "52",
          name: "Tỉnh Bình Định",
          type: "Tỉnh",
          slug: "BINHDINH",
        },
        {
          matp: "54",
          name: "Tỉnh Phú Yên",
          type: "Tỉnh",
          slug: "PHUYEN",
        },
        {
          matp: "56",
          name: "Tỉnh Khánh Hòa",
          type: "Tỉnh",
          slug: "KHANHHOA",
        },
        {
          matp: "58",
          name: "Tỉnh Ninh Thuận",
          type: "Tỉnh",
          slug: "NINHTHUAN",
        },
        {
          matp: "60",
          name: "Tỉnh Bình Thuận",
          type: "Tỉnh",
          slug: "BINHTHUAN",
        },
        {
          matp: "62",
          name: "Tỉnh Kon Tum",
          type: "Tỉnh",
          slug: "KONTUM",
        },
        {
          matp: "64",
          name: "Tỉnh Gia Lai",
          type: "Tỉnh",
          slug: "GIALAI",
        },
        {
          matp: "66",
          name: "Tỉnh Đắk Lắk",
          type: "Tỉnh",
          slug: "DAKLAK",
        },
        {
          matp: "67",
          name: "Tỉnh Đắk Nông",
          type: "Tỉnh",
          slug: "DAKNONG",
        },
        {
          matp: "68",
          name: "Tỉnh Lâm Đồng",
          type: "Tỉnh",
          slug: "LAMDONG",
        },
        {
          matp: "70",
          name: "Tỉnh Bình Phước",
          type: "Tỉnh",
          slug: "BINHPHUOC",
        },
        {
          matp: "72",
          name: "Tỉnh Tây Ninh",
          type: "Tỉnh",
          slug: "TAYNINH",
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
          matp: "80",
          name: "Tỉnh Long An",
          type: "Tỉnh",
          slug: "LONGAN",
        },
        {
          matp: "82",
          name: "Tỉnh Tiền Giang",
          type: "Tỉnh",
          slug: "TIENGIANG",
        },
        {
          matp: "83",
          name: "Tỉnh Bến Tre",
          type: "Tỉnh",
          slug: "BENTRE",
        },
        {
          matp: "84",
          name: "Tỉnh Trà Vinh",
          type: "Tỉnh",
          slug: "TRAVINH",
        },
        {
          matp: "86",
          name: "Tỉnh Vĩnh Long",
          type: "Tỉnh",
          slug: "VINHLONG",
        },
        {
          matp: "87",
          name: "Tỉnh Đồng Tháp",
          type: "Tỉnh",
          slug: "DONGTHAP",
        },
        {
          matp: "89",
          name: "Tỉnh An Giang",
          type: "Tỉnh",
          slug: "ANGIANG",
        },
        {
          matp: "91",
          name: "Tỉnh Kiên Giang",
          type: "Tỉnh",
          slug: "KIENGIANG",
        },
        {
          matp: "92",
          name: "Thành phố Cần Thơ",
          type: "Thành phố Trung ương",
          slug: "CANTHO",
        },
        {
          matp: "93",
          name: "Tỉnh Hậu Giang",
          type: "Tỉnh",
          slug: "HAUGIANG",
        },
        {
          matp: "94",
          name: "Tỉnh Sóc Trăng",
          type: "Tỉnh",
          slug: "SOCTRANG",
        },
        {
          matp: "95",
          name: "Tỉnh Bạc Liêu",
          type: "Tỉnh",
          slug: "BACLIEU",
        },
        {
          matp: "96",
          name: "Tỉnh Cà Mau",
          type: "Tỉnh",
          slug: "CAMAU",
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
