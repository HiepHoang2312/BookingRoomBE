"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DichvuRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DichvuRoom.belongsTo(models.Room, {
        foreignKey: "roomId",
      });
    }
  }
  DichvuRoom.init(
    {
      roomId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Room",
          key: "id",
        },
      },
      dichvuId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Dichvu",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "DichvuRoom",
    },
  );
  return DichvuRoom;
};
