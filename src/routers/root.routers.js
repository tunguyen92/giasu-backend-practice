const { Router } = require("express");
const { authRouter } = require("./auth.routers");
const { giaSuRouter } = require("./gia-su.routers");
const { nguoiHocRouter } = require("./nguoi-hoc.routers");
const { quanHuyenRouter } = require("./quan-huyen.routers");
const { TinhThanhPhoRouter } = require("./tinh-thanhpho.routers");
const { XaPhuongThiTranRouter } = require("./xa-phuong-thitran.routers");
const rootRouter = Router();

// http://localhost:8080/api/v1/nguoihoc
rootRouter.use("/nguoi-hoc", nguoiHocRouter);
rootRouter.use("/xac-thuc", authRouter);
rootRouter.use("/gia-su", giaSuRouter);
rootRouter.use("/quan-huyen", quanHuyenRouter);
rootRouter.use("/tinh-thanhpho", TinhThanhPhoRouter);
rootRouter.use("/xa-phuong-thitran", XaPhuongThiTranRouter);

module.exports = {
  rootRouter,
};
