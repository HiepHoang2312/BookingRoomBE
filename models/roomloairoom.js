"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoomLoairoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RoomLoairoom.belongsTo(models.Room, {
        foreignKey: "roomId",
      });
    }
  }
  RoomLoairoom.init(
    {
      loairoomId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Loairoom",
          key: "id",
        },
      },
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
      modelName: "RoomLoairoom",
    },
  );
  return RoomLoairoom;
};
