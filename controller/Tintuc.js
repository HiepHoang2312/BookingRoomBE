var Tintuc = require("../models").Tintuc;
var Tag = require("../models").Tag;
var TintucTag = require("../models").TintucTag;
exports.create = (req, res) => {
  Tintuc.create(req.body, { include: [TintucTag] })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.findall = (req, res) => {
  Tintuc.findAll({ include: [Tag] })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
      // res.json({ er: er.message })
    });
};
exports.findone = (req, res) => {
  Tintuc.findOne({ include: [Tag] }, { where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.delete = (req, res) => {
  Tintuc.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.update = (req, res) => {
  Tintuc.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.addtag = (req, res) => {
  TintucTag.create(req.body)
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};

exports.findByTag = (req, res) => {
  const tagName = req.params.tagName;

  Tag.findOne({
    where: { name: tagName },
    include: [
      {
        model: Tintuc,
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error retrieving Tintuc with tag." });
    });
};
