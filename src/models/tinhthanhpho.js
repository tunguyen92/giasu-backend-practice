"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TinhThanhPho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ QuanHuyen }) {
      // define association here
      this.hasMany(QuanHuyen, {
        foreignKey: "matp",
      });
    }
  }
  TinhThanhPho.init(
    {
      matp: {
        type: DataTypes.STRING(5),
        primaryKey: true,
      },
      name: DataTypes.STRING(100),
      type: DataTypes.STRING(30),
      slug: DataTypes.STRING(30),
    },
    {
      sequelize,
      modelName: "TinhThanhPho",
    }
  );
  TinhThanhPho.removeAttribute("createdAt");
  TinhThanhPho.removeAttribute("updatedAt");
  return TinhThanhPho;
};
