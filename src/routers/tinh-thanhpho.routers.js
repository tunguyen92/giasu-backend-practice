const { Router } = require("express");
const {
  layDanhSachTinhThanhPho,
} = require("../controllers/tinh-thanhpho.controllers");

const TinhThanhPhoRouter = Router();

TinhThanhPhoRouter.get("/TinhThanhPho", layDanhSachTinhThanhPho);

module.exports = {
  TinhThanhPhoRouter,
};
