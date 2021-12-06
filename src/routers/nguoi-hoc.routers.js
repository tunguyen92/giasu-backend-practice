const { Router } = require("express");
const {
  taoNguoiHoc,
  layDanhSachNguoiHoc,
  layChiTietNguoiHoc,
  capNhatNguoiHoc,
  xoaNguoiHoc,
} = require("../controllers/nguoi-hoc.controllers");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middleware");
const {
  checkExist,
} = require("../middlewares/validations/check-exist.middlewares");
const { NguoiHoc } = require("../models");

const nguoiHocRouter = Router();

nguoiHocRouter.get("/", layDanhSachNguoiHoc);
nguoiHocRouter.get("/:id", checkExist(NguoiHoc), layChiTietNguoiHoc);
nguoiHocRouter.post("/", taoNguoiHoc);
nguoiHocRouter.put("/:id", checkExist(NguoiHoc), capNhatNguoiHoc);
nguoiHocRouter.delete(
  "/:id",
  authenticate,
  authorize("quanTri", "admin"),
  checkExist(NguoiHoc),
  xoaNguoiHoc
);

module.exports = {
  nguoiHocRouter,
};
