module.exports = (app) => {
  var RoomKhuyenmai = require("../controller/RoomKhuyenmai");
  var router = require("express").Router();

  router.post("/", RoomKhuyenmai.create);
  router.get("/", RoomKhuyenmai.findall);
  router.delete("/:id", RoomKhuyenmai.delete);
  router.patch("/:id", RoomKhuyenmai.update);

  app.use("/roomkhuyenmais", router);
};
