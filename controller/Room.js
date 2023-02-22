var Room = require("../models").Room;
var DichvuRoom = require("../models").DichvuRoom;
var RoomNgaydi = require("../models").RoomNgaydi;
var DichvuRoom = require("../models").DichvuRoom;
var Anh = require("../models").Anh;
var Diadiem = require("../models").Diadiem;
var Roomdiadiem = require("../models").RoomDiadiem;
var Loairoom = require("../models").Loairoom;
var RoomLoairoom = require("../models").RoomLoairoom;
var Dichvu = require("../models").Dichvu;
var RoomDichvu = require("../models").DichvuRoom;
var Ngaydi = require("../models").Ngaydi;
var RoomNgaydi = require("../models").RoomNgaydi;
var Khuyenmai = require("../models").Khuyenmai;
exports.create = (req, res) => {
  Room.create(req.body, {
    include: [Anh, Roomdiadiem, RoomLoairoom, RoomDichvu, RoomNgaydi],
  })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.findall = (req, res) => {
  Room.findAll({ include: [Anh, Diadiem, Loairoom, Dichvu, Ngaydi, Khuyenmai] })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.findone = (req, res) => {
  Room.findOne({
    where: { id: req.params.id },
    include: [Anh, Diadiem, Loairoom, Dichvu, Ngaydi, Khuyenmai],
  })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.delete = (req, res) => {
  Room.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.update = (req, res) => {
  Room.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.adddichvu = (req, res) => {
  DichvuRoom.create(req.body)
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.addloairoom = (req, res) => {
  RoomLoairoom.create(req.body)
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.addNgaydi = (req, res) => {
  RoomNgaydi.create(req.body)
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
