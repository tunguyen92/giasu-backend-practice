"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GiaSu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ NguoiHoc, DatLop }) {
      // define association here
      this.hasMany(DatLop, {
        foreignKey: "giaSuId",
        as: "datLop",
      });
      // this.belongsToMany(NguoiHoc, {
      //   foreignKey: "id",
      //   as: "nguoiHoc",
      //   through: "datlops",
      // });
    }
  }
  GiaSu.init(
    {
      sdt: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUnique: (value, next) => {
            GiaSu.findAll({
              where: { sdt: value },
              attributes: ["id"],
            })
              .then((user) => {
                if (user.length != 0) next(new Error("Sđt đã được sử dụng!"));
                next();
              })
              .catch((onError) => console.log(onError));
          },
        },
      },
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
      gioiTinh: DataTypes.STRING,
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
