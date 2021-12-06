"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuanHuyen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ TinhThanhPho }) {
      // define association here
      this.belongsTo(TinhThanhPho, {
        foreignKey: "matp",
      });
    }
  }
  QuanHuyen.init(
    {
      maqh: {
        type: DataTypes.STRING(5),
        primaryKey: true,
      },
      name: DataTypes.STRING(100),
      type: DataTypes.STRING(30),
      matp: DataTypes.STRING(5),
    },
    {
      sequelize,
      modelName: "QuanHuyen",
    }
  );
  QuanHuyen.removeAttribute("createdAt");
  QuanHuyen.removeAttribute("updatedAt");
  return QuanHuyen;
};
