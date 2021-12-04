const { Router } = require("express");
const {
  layDanhSachTinhThanhPho,
} = require("../controllers/tinh-thanhpho.controllers");

const TinhThanhPhoRouter = Router();

TinhThanhPhoRouter.get("/", layDanhSachTinhThanhPho);

module.exports = {
  TinhThanhPhoRouter,
};
