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
      "giasus",
      [
        {
          sdt: "0645654812",
          matKhau: "123456",
          email: "thanhtu@gmail.com",
          tinhThanh: "HCM",
          nguoiDung: "giaSu",
          vaiTro: "quanTri",
          hoTen: "Nguyễn Thị Sói",
          ngaySinh: "1992-02-21",
          gioiTinh: "Nam",
          nguyenQuan: "HN",
          giongNoi: "Nam",
          diaChi: "21 hà nội",
          soCCCD: "212212121",
          anhDaiDien: "ảnh",
          anhBangCap: "ảnh luôn",
          anhCCCD: "ảnh nốt",
          truongHoc: "ĐH SG",
          nganhHoc: "Toán",
          namTotNghiep: "2102",
          hienLa: "sinh viên",
          uuDiem: "Good boy",
          monDay: "Toán",
          lopDay: "9, 10, 11",
          khuVucDay: "Q9, Q2",
          thoiGianDay: "tối 2, 4, 6",
          createdAt: "2021-12-06 09:44:24",
          updatedAt: "021-12-06 09:44:24",
        },
        {
          sdt: "0587846549",
          matKhau: "123456",
          email: "thanhtu@gmail.com",
          tinhThanh: "HCM",
          nguoiDung: "giaSu",
          vaiTro: "quanTri",
          hoTen: "Nguyễn Thị",
          ngaySinh: "1992-02-21",
          gioiTinh: "Nam",
          nguyenQuan: "HN",
          giongNoi: "Nam",
          diaChi: "21 hà nội",
          soCCCD: "212212121",
          anhDaiDien: "ảnh",
          anhBangCap: "ảnh luôn",
          anhCCCD: "ảnh nốt",
          truongHoc: "ĐH SG",
          nganhHoc: "Toán",
          namTotNghiep: "2102",
          hienLa: "sinh viên",
          uuDiem: "Good boy",
          monDay: "Toán",
          lopDay: "9, 10, 11",
          khuVucDay: "Q9, Q2",
          thoiGianDay: "tối 2, 4, 6",
          createdAt: "2021-12-06 09:44:24",
          updatedAt: "021-12-06 09:44:24",
        },
        {
          sdt: "0147852146",
          matKhau: "123456",
          email: "thanhtu@gmail.com",
          tinhThanh: "HCM",
          nguoiDung: "giaSu",
          vaiTro: "khachHang",
          hoTen: "Trần Ha",
          ngaySinh: "1992-02-21",
          gioiTinh: "Nam",
          nguyenQuan: "HN",
          giongNoi: "Nam",
          diaChi: "21 hà nội",
          soCCCD: "212212121",
          anhDaiDien: "ảnh",
          anhBangCap: "ảnh luôn",
          anhCCCD: "ảnh nốt",
          truongHoc: "ĐH SG",
          nganhHoc: "Toán",
          namTotNghiep: "2102",
          hienLa: "sinh viên",
          uuDiem: "Good boy",
          monDay: "Toán",
          lopDay: "9, 10, 11",
          khuVucDay: "Q9, Q2",
          thoiGianDay: "tối 2, 4, 6",
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
    await queryInterface.bulkDelete("giasus", null, {});
  },
};
