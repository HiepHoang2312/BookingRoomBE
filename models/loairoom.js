"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Loairoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Loairoom.belongsToMany(models.Room, {
        through: "RoomLoairooms",
      });
    }
  }
  Loairoom.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Loairoom",
    },
  );
  return Loairoom;
};
