const { Router } = require("express");
const { authRouter } = require("./auth.routers");
const { DonViHanhChinhRouter } = require("./donvi-hanhchinh.routers");
const { giaSuRouter } = require("./gia-su.routers");
const { nguoiHocRouter } = require("./nguoi-hoc.routers");
const { ThongTinGiaSuRouter } = require("./thongtin-giasu.routers");
const rootRouter = Router();

// http://localhost:8080/api/v1/nguoihoc
rootRouter.use("/NguoiHoc", nguoiHocRouter);
rootRouter.use("/XacThuc", authRouter);
rootRouter.use("/GiaSu", giaSuRouter);
rootRouter.use("/DonViHanhChinh", DonViHanhChinhRouter);
rootRouter.use("/ThongTinGiaSu", ThongTinGiaSuRouter);

module.exports = {
  rootRouter,
};
