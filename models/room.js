"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.belongsToMany(models.User, {
        through: "Binhluans",
      }),
        Room.belongsToMany(models.Dichvu, {
          through: "DichvuRooms",
        }),
        Room.belongsToMany(models.User, {
          through: "Hoadons",
        }),
        Room.belongsToMany(models.Ngaydi, {
          through: "RoomNgaydis",
        }),
        Room.hasMany(models.Anh),
        Room.belongsToMany(models.Loairoom, {
          through: "RoomLoairooms",
        }),
        Room.belongsToMany(models.Diadiem, {
          through: "RoomDiadiems",
        }),
        Room.belongsToMany(models.Khuyenmai, {
          through: "RoomKhuyenmais",
        });
      Room.hasMany(models.RoomKhuyenmai),
        Room.hasMany(models.RoomDiadiem),
        Room.hasMany(models.RoomLoairoom),
        Room.hasMany(models.DichvuRoom),
        Room.hasMany(models.RoomNgaydi);
    }
  }
  Room.init(
    {
      name: DataTypes.STRING(500),
      avatar: DataTypes.STRING(5000),
      tenanh: DataTypes.STRING(1000),
      gianguoilon: DataTypes.INTEGER,
      giatreem: DataTypes.INTEGER,
      giaembe: DataTypes.INTEGER,
      trailer: DataTypes.STRING(1000),
      chitietroom: DataTypes.TEXT,
      luuy: DataTypes.TEXT,
      vitri: DataTypes.INTEGER,
      bando: DataTypes.STRING(5000),
      status: DataTypes.INTEGER,
      songuoi: DataTypes.INTEGER,
      thoigian: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Room",
    },
  );
  return Room;
};
