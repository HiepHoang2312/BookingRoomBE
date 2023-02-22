module.exports = (app) => {
  var RoomDiadiem = require("../controller/RoomDiadiem");
  var router = require("express").Router();

  router.post("/", RoomDiadiem.create);
  router.get("/", RoomDiadiem.findall);
  router.delete("/:id", RoomDiadiem.delete);
  router.patch("/:id", RoomDiadiem.update);

  app.use("/roomdiadiems", router);
};
