"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hoadon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hoadon.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Hoadon.belongsTo(models.Room, {
        foreignKey: "roomId",
      });
    }
  }
  Hoadon.init(
    {
      roomId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Room",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      nguoilon: DataTypes.INTEGER,
      treem: DataTypes.INTEGER,
      embe: DataTypes.INTEGER,
      ngaydi: DataTypes.STRING,
      thanhtien: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Hoadon",
    },
  );
  return Hoadon;
};
