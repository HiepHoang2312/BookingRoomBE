var Hoadon = require("../models").Hoadon;
var Room = require("../models").Room;
var User = require("../models").User;
exports.create = (req, res) => {
  Hoadon.create(req.body)
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.findall = (req, res) => {
  Hoadon.findAll({
    order: [["id", "DESC"]],
    include: [
      {
        model: Room,
        attributes: [
          "id",
          "gianguoilon",
          "giatreem",
          "giaembe",
          "name",
          "thoigian",
          "avatar",
        ],
      },
      { model: User, attributes: ["id", "name"] },
    ],
  })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.findone = (req, res) => {
  Hoadon.findOne({
    attributes: [
      "id",
      "roomId",
      "userId",
      "thanhtien",
      "nguoilon",
      "treem",
      "embe",
      "ngaydi",
    ],
    where: { id: req.params.id },
    include: [
      {
        model: Room,
        attributes: ["id", "gianguoilon", "giatreem", "giaembe", "name"],
      },
      { model: User, attributes: ["id", "name"] },
    ],
  })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.delete = (req, res) => {
  Hoadon.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.update = (req, res) => {
  Hoadon.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
