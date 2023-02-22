const nodemailer = require("nodemailer");
require("dotenv").config();
exports.sendEmail = async (req, res) => {
  const log = console.log;
  const data = req.body;
  // Step 1
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: "hoangnhathiep0@gmail.com",
      pass: "ucztkgavuekudzxo",
    },
  });

  // Step 2
  let mailOptions = {
    from: "hoangnhathiep0@gmail.com", // TODO: email receiver
    to: data.email, // TODO: email sender
    subject: "Đăng ký phòng thành công!",
    text:
      "Đặt phòng thành công " +
      data.tenroom +
      " với giá " +
      data.thanhtien +
      "vnđ Xin chúc mừng bạn !",
  };

  // Step 3
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return log("Error occurs", err);
    }
    return log("Email sent!!!");
  });
};
