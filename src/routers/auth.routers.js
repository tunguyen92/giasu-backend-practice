const { Router } = require("express");
const {
  dangNhap,
  caiLaiMatKhau,
  dangKiNguoiHoc,
  dangKiGiaSu,
} = require("../controllers/auth.controllers");

const authRouter = Router();

authRouter.post("/dang-ki-nguoi-hoc", dangKiNguoiHoc);
authRouter.post("/dang-ki-gia-su", dangKiGiaSu);
authRouter.post("/dang-nhap", dangNhap);
authRouter.post("/cai-lai-mat-khau", caiLaiMatKhau);

module.exports = {
  authRouter,
};
