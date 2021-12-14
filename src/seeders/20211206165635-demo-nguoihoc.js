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
      "nguoihocs",
      [
        {
          sdt: "032151651",
          matKhau: "123456",
          nguoiDung: "nguoiHoc",
          vaiTro: "khachHang",
          hoTen: "Nguyễn Bé Hai",
          gioiTinh: "Nam",
          anhDaiDien: "ảnh aaaa",
          monHoc: "Toán, Lý, Hóa",
          lopHoc: "12",
          tinhThanh: "HCM",
          quanHuyen: "Q2",
          phuongXa: "P3",
          duong: "Hà Huy Giáp",
          diaChi: "số nhà 123",
          mucLuong: 1000000,
          phanTramPhi: 40,
          phiGiaSu: 400000,
          soBuoi: "3 buổi",
          thoiGian: "tối 2, 4, 6",
          thongTin: "học sinh nữ",
          yeuCau: "giáo viên nam",
          daGiao: false,
          createdAt: "2021-12-06 09:44:24",
          updatedAt: "021-12-06 09:44:24",
        },
        {
          sdt: "054565132",
          matKhau: "123456",
          nguoiDung: "nguoiHoc",
          vaiTro: "quanTri",
          hoTen: "Nguyễn Ti",
          gioiTinh: "Nam",
          anhDaiDien: "ảnh",
          monHoc: "Toán, Lý, Hóa",
          lopHoc: "12",
          tinhThanh: "HCM",
          quanHuyen: "Q2",
          phuongXa: "P3",
          duong: "Hà Huy Giáp",
          diaChi: "số nhà 123",
          mucLuong: 1000000,
          phanTramPhi: 40,
          phiGiaSu: 400000,
          soBuoi: "3 buổi",
          thoiGian: "tối 2, 4, 6",
          thongTin: "học sinh nữ",
          yeuCau: "giáo viên nam",
          daGiao: false,
          createdAt: "2021-12-06 09:44:24",
          updatedAt: "021-12-06 09:44:24",
        },
        {
          sdt: "031655664",
          matKhau: "123456",
          nguoiDung: "nguoiHoc",
          vaiTro: "khachHang",
          hoTen: "Nguyễn Bé Hai",
          gioiTinh: "Nam",
          anhDaiDien: "ảnh aaaa",
          monHoc: "Toán, Lý, Hóa",
          lopHoc: "12",
          tinhThanh: "HCM",
          quanHuyen: "Q2",
          phuongXa: "P3",
          duong: "Hà Huy Giáp",
          diaChi: "số nhà 123",
          mucLuong: 1000000,
          phanTramPhi: 40,
          phiGiaSu: 400000,
          soBuoi: "3 buổi",
          thoiGian: "tối 2, 4, 6",
          thongTin: "học sinh nữ",
          yeuCau: "giáo viên nam",
          daGiao: false,
          createdAt: "2021-12-06 09:44:24",
          updatedAt: "021-12-06 09:44:24",
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
    await queryInterface.bulkDelete("nguoihocs", null, {});
  },
};
