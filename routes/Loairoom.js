module.exports = (app) => {
  var loairoom = require("../controller/Loairoom");
  var router = require("express").Router();

  router.post("/", loairoom.create);
  router.get("/", loairoom.findall);
  router.get("/:id", loairoom.findone);
  router.delete("/:id", loairoom.delete);
  router.patch("/:id", loairoom.update);

  app.use("/loairooms", router);
};
