const { Router } = require("express");
const {
  dangNhap,
  caiLaiMatKhau,
  dangKiNguoiHoc,
  dangKiGiaSu,
} = require("../controllers/auth.controllers");

const authRouter = Router();
const { NguoiHoc, GiaSu } = require("../models");

authRouter.post("/DangKiNguoiHoc", dangKiNguoiHoc);
authRouter.post("/DangKiGiaSu", dangKiGiaSu);
authRouter.post("/DangNhapNguoiHoc", dangNhap(NguoiHoc));
authRouter.post("/DangNhapGiaSu", dangNhap(GiaSu));
authRouter.post("/CaiLaiMatKhau", caiLaiMatKhau);

module.exports = {
  authRouter,
};
