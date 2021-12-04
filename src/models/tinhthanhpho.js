"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TinhThanhPho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TinhThanhPho.init(
    {
      matp: DataTypes.STRING(5),
      name: DataTypes.STRING(100),
      type: DataTypes.STRING(30),
      slug: DataTypes.STRING(30),
    },
    {
      sequelize,
      modelName: "TinhThanhPho",
    }
  );
  return TinhThanhPho;
};
