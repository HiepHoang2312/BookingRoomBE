"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Anh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anh.belongsTo(models.Room);
    }
  }
  Anh.init(
    {
      link: DataTypes.STRING(1000),
      tenanh: DataTypes.STRING(1000),
      status: DataTypes.INTEGER,
      banner: DataTypes.INTEGER,
      roomId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Room",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Anh",
    },
  );
  return Anh;
};
