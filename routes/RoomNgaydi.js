module.exports = (app) => {
  var RoomNgaydi = require("../controller/RoomNgaydi");
  var router = require("express").Router();

  router.post("/", RoomNgaydi.create);
  router.get("/", RoomNgaydi.findall);
  router.delete("/:id", RoomNgaydi.delete);
  router.patch("/:id", RoomNgaydi.update);

  app.use("/roomngaydis", router);
};
