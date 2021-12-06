"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GiaSu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GiaSu.init(
    {
      sdt: DataTypes.STRING,
      matKhau: DataTypes.STRING,
      email: DataTypes.STRING,
      tinhThanh: DataTypes.STRING,
      nguoiDung: {
        type: DataTypes.STRING,
        defaultValue: "giaSu",
      },
      vaiTro: {
        type: DataTypes.STRING,
        defaultValue: "khachHang",
      },
      hoTen: DataTypes.STRING,
      ngaySinh: DataTypes.DATE,
      nguyenQuan: DataTypes.STRING,
      giongNoi: DataTypes.STRING,
      diaChi: DataTypes.STRING,
      soCCCD: DataTypes.STRING,
      anhDaiDien: DataTypes.STRING,
      anhBangCap: DataTypes.JSON,
      anhCCCD: DataTypes.JSON,
      truongHoc: DataTypes.STRING,
      nganhHoc: DataTypes.STRING,
      namTotNghiep: DataTypes.STRING,
      hienLa: DataTypes.STRING,
      uuDiem: DataTypes.STRING,
      monDay: DataTypes.STRING,
      lopDay: DataTypes.STRING,
      khuVucDay: DataTypes.STRING,
      thoiGianDay: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "GiaSu",
    }
  );
  return GiaSu;
};
