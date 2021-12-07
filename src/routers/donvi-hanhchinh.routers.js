const { Router } = require("express");
const {
  layDanhSachDonViHanhChinh,
} = require("../controllers/donvi-hanhchinh.controllers");

const DonViHanhChinhRouter = Router();

DonViHanhChinhRouter.get("/", layDanhSachDonViHanhChinh);

module.exports = {
  DonViHanhChinhRouter,
};
