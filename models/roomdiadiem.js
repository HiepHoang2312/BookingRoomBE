"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoomDiadiem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RoomDiadiem.belongsTo(models.Room, {
        foreignKey: "roomId",
      });
    }
  }
  RoomDiadiem.init(
    {
      diadiemId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Diadiem",
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
      modelName: "RoomDiadiem",
    },
  );
  return RoomDiadiem;
};
