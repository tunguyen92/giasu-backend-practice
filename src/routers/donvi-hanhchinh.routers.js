const { Router } = require("express");
const {
  layDanhSachDonViHanhChinh,
} = require("../controllers/donvi-hanhchinh.controllers");

const DonViHanhChinhRouter = Router();

/**
 * @swagger
 * /api/v1/DonViHanhChinh:
 *   get:
 *     summary: Lấy danh sách đơn vị hành chính
 *     tags: [DonViHanhChinh]
 *     responses:
 *       200:
 *         description: Success
 */

DonViHanhChinhRouter.get("/", layDanhSachDonViHanhChinh);

module.exports = {
  DonViHanhChinhRouter,
};
