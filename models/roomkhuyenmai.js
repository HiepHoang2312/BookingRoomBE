"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoomKhuyenmai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RoomKhuyenmai.belongsTo(models.Room, {
        foreignKey: "roomId",
      });
    }
  }
  RoomKhuyenmai.init(
    {
      roomId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Room",
          key: "id",
        },
      },
      khuyenmaiId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Khuyenmai",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "RoomKhuyenmai",
    },
  );
  return RoomKhuyenmai;
};
