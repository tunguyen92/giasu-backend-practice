"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NguoiHoc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ GiaSu, DatLop }) {
      // define association here
      this.hasMany(DatLop, {
        foreignKey: "nguoiHocId",
        as: "datLop",
      });
      // this.belongsToMany(GiaSu, {
      //   foreignKey: "id",
      //   as: "giaSu",
      //   through: "datlops",
      // });
    }
  }
  NguoiHoc.init(
    {
      sdt: DataTypes.STRING,
      matKhau: DataTypes.STRING,
      nguoiDung: {
        type: DataTypes.STRING,
        defaultValue: "nguoiHoc",
      },
      vaiTro: {
        type: DataTypes.STRING,
        defaultValue: "khachHang",
      },
      hoTen: DataTypes.STRING,
      anhDaiDien: DataTypes.STRING,
      monHoc: DataTypes.STRING,
      lopHoc: DataTypes.STRING,
      tinhThanh: DataTypes.STRING,
      quanHuyen: DataTypes.STRING,
      phuongXa: DataTypes.STRING,
      duong: DataTypes.STRING,
      diaChi: DataTypes.STRING,
      mucLuong: DataTypes.FLOAT,
      soBuoi: DataTypes.STRING,
      thoiGian: DataTypes.STRING,
      thongTin: DataTypes.STRING,
      yeuCau: DataTypes.STRING,
      daGiao: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "NguoiHoc",
    }
  );
  return NguoiHoc;
};
