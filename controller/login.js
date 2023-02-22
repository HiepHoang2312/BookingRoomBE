require("dotenv").config();
const User = require("../models").User;
const jwt = require("jsonwebtoken");
const Role = require("../models").Role;
const nodemailer = require("nodemailer");
exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findAll({
    where: { email: email, password: password },
    include: [Role],
  })
    .then((data) => {
      if (data[0] !== undefined) {
        var user = {
          id: data[0].id,
          role: data[0].Roles[0].name,
          mota: data[0].Roles[0].mota,
        };
        var token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "3h",
        });
        res.json(token);
      } else {
        res.json("err");
      }
    })
    .catch((err) => {
      res.json({ err: err.message });
    });
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "Email không tìm thấy" });
  }
  console.log(req.body, "email");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: "hoangnhathiep0@gmail.com",
      pass: "ucztkgavuekudzxo",
    },
  });

  const mailOptions = {
    from: "hoangnhathiep0@gmail.com",
    to: email,
    subject: "Quên mật khẩu",
    text: `Mật khẩu của bạn là: ${user?.password}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Email không thể gửi" });
    }
    console.log("Email đã được gửi: " + info.response);
    res.status(200).json({ message: "Email đã được gửi" });
  });
};
