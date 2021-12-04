"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class XaPhuongThiTran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  XaPhuongThiTran.init(
    {
      xaid: DataTypes.STRING(5),
      name: DataTypes.STRING(100),
      type: DataTypes.STRING(30),
      maqh: DataTypes.STRING(5),
    },
    {
      sequelize,
      modelName: "XaPhuongThiTran",
    }
  );
  return XaPhuongThiTran;
};
