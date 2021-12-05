const { Router } = require("express");
const {
  layDanhSachXaPhuongThiTran,
} = require("../controllers/xa-phuong-thitran.controllers");

const XaPhuongThiTranRouter = Router();

XaPhuongThiTranRouter.get("/XaPhuongThiTran", layDanhSachXaPhuongThiTran);

module.exports = {
  XaPhuongThiTranRouter,
};
