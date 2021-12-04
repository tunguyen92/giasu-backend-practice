"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("GiaSus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sdt: {
        type: Sequelize.STRING,
      },
      matKhau: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      tinhThanh: {
        type: Sequelize.STRING,
      },
      nguoiDung: {
        type: Sequelize.STRING,
      },
      vaiTro: {
        type: Sequelize.STRING,
      },
      hoTen: {
        type: Sequelize.STRING,
      },
      ngaySinh: {
        type: Sequelize.DATE,
      },
      nguyenQuan: {
        type: Sequelize.STRING,
      },
      giongNoi: {
        type: Sequelize.STRING,
      },
      diaChi: {
        type: Sequelize.STRING,
      },
      soCCCD: {
        type: Sequelize.STRING,
      },
      anhDaiDien: {
        type: Sequelize.STRING,
      },
      anhBangCap: {
        type: Sequelize.STRING,
      },
      anhCCCD: {
        type: Sequelize.STRING,
      },
      truongHoc: {
        type: Sequelize.STRING,
      },
      nganhHoc: {
        type: Sequelize.STRING,
      },
      namTotNghiep: {
        type: Sequelize.STRING,
      },
      hienLa: {
        type: Sequelize.STRING,
      },
      uuDiem: {
        type: Sequelize.STRING,
      },
      monDay: {
        type: Sequelize.STRING,
      },
      lopDay: {
        type: Sequelize.STRING,
      },
      khuVucDay: {
        type: Sequelize.STRING,
      },
      thoiGianDay: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("GiaSus");
  },
};
