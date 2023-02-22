module.exports = (app) => {
  var RoomLoairoom = require("../controller/RoomLoairoom");
  var router = require("express").Router();

  router.post("/", RoomLoairoom.create);
  router.get("/", RoomLoairoom.findall);
  router.delete("/:id", RoomLoairoom.delete);
  router.patch("/:id", RoomLoairoom.update);

  app.use("/roomloairooms", router);
};
