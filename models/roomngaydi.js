"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoomNgaydi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RoomNgaydi.belongsTo(models.Room, {
        foreignKey: "roomId",
      });
    }
  }
  RoomNgaydi.init(
    {
      roomId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Room",
          key: "id",
        },
      },
      ngaydiId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Ngaydi",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "RoomNgaydi",
    },
  );
  return RoomNgaydi;
};
