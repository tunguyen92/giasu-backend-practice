"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("NguoiHocs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sdt: {
        type: Sequelize.STRING,
        // validate: {
        //   isUnique: (value, next) => {
        //     NguoiHoc.findAll({
        //       where: { sdt: value },
        //       attributes: ["id"],
        //     })
        //       .then((user) => {
        //         if (user.length != 0) next(new Error("Sđt đã dược sử dụng!"));
        //         next();
        //       })
        //       .catch((onError) => console.log(onError));
        //   },
        // },
      },
      matKhau: {
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
      gioiTinh: {
        type: Sequelize.STRING,
      },
      anhDaiDien: {
        type: Sequelize.STRING,
      },
      monHoc: {
        type: Sequelize.STRING,
      },
      lopHoc: {
        type: Sequelize.STRING,
      },
      tinhThanh: {
        type: Sequelize.STRING,
      },
      quanHuyen: {
        type: Sequelize.STRING,
      },
      phuongXa: {
        type: Sequelize.STRING,
      },
      duong: {
        type: Sequelize.STRING,
      },
      diaChi: {
        type: Sequelize.STRING,
      },
      mucLuong: {
        type: Sequelize.FLOAT,
      },
      phanTramPhi: {
        type: Sequelize.INTEGER,
      },
      phiGiaSu: {
        type: Sequelize.FLOAT,
      },
      soBuoi: {
        type: Sequelize.STRING,
      },
      thoiGian: {
        type: Sequelize.STRING,
      },
      thongTin: {
        type: Sequelize.STRING,
      },
      yeuCau: {
        type: Sequelize.STRING,
      },
      daGiao: {
        type: Sequelize.BOOLEAN,
      },
      maqh: {
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
    await queryInterface.dropTable("NguoiHocs");
  },
};
