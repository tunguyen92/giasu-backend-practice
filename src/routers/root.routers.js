const { Router } = require("express");
const { authRouter } = require("./auth.routers");
const { giaSuRouter } = require("./gia-su.routers");
const { nguoiHocRouter } = require("./nguoi-hoc.routers");
const { quanHuyenRouter } = require("./quan-huyen.routers");
const { TinhThanhPhoRouter } = require("./tinh-thanhpho.routers");
const { XaPhuongThiTranRouter } = require("./xa-phuong-thitran.routers");
const rootRouter = Router();

// http://localhost:8080/api/v1/nguoihoc
rootRouter.use("/NguoiHoc", nguoiHocRouter);
rootRouter.use("/XacThuc", authRouter);
rootRouter.use("/GiaSu", giaSuRouter);
rootRouter.use("/DonViHanhChinh", quanHuyenRouter);
rootRouter.use("/DonViHanhChinh", TinhThanhPhoRouter);
rootRouter.use("/DonViHanhChinh", XaPhuongThiTranRouter);

module.exports = {
  rootRouter,
};
