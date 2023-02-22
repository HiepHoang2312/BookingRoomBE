module.exports = (app) => {
  const user = require("../controller/login");

  var router = require("express").Router();

  router.post("/", user.login);
  router.post("/forget-password", user.forgotPassword);

  app.use("/login", router);
};
