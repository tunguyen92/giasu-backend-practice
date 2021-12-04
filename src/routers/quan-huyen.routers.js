const { Router } = require("express");
const {
  layDanhSachQuanHuyen,
} = require("../controllers/quan-huyen.controllers");

const quanHuyenRouter = Router();

quanHuyenRouter.get("/", layDanhSachQuanHuyen);

module.exports = {
  quanHuyenRouter,
};
