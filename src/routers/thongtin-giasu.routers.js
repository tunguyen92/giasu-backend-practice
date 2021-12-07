const { Router } = require("express");
const { thongTinGiaSu } = require("../controllers/thongtin-giasu.controller");

const ThongTinGiaSuRouter = Router();

ThongTinGiaSuRouter.get("/", thongTinGiaSu);

module.exports = {
  ThongTinGiaSuRouter,
};
