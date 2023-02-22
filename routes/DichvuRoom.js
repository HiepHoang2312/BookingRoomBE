module.exports = (app) => {
  var DichvuRoom = require("../controller/DichvuRoom");
  var router = require("express").Router();

  router.post("/", DichvuRoom.create);
  router.get("/", DichvuRoom.findall);
  router.delete("/:id", DichvuRoom.delete);
  router.patch("/:id", DichvuRoom.update);

  app.use("/dichvurooms", router);
};
