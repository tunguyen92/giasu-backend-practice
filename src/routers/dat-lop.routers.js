const { Router } = require("express");
const { datLop } = require("../controllers/dat-lop.controller");

const DatLopRouter = Router();

/**
 * @swagger
 * /api/v1/DatLop:
 *   post:
 *     summary: Đặt lớp
 *     tags: [DatLop]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DatLop'
 *     decription: Lấy id của gia sư và người học
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Some server error
 */

DatLopRouter.post("/", datLop);

module.exports = {
  DatLopRouter,
};
