module.exports = (app) => {
  var Room = require("../controller/Room");
  var router = require("express").Router();

  router.post("/", Room.create);
  router.get("/", Room.findall);
  router.get("/:id", Room.findone);
  router.delete("/:id", Room.delete);
  router.patch("/:id", Room.update);
  router.post("/dichvu", Room.adddichvu);
  router.post("/loairoom", Room.addloairoom);
  router.post("/ngaydi", Room.addNgaydi);
  app.use("/rooms", router);
};
