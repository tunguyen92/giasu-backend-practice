const { Router } = require("express");
const {
  taoNguoiHoc,
  layDanhSachNguoiHoc,
  layChiTietNguoiHoc,
  capNhatNguoiHoc,
  xoaNguoiHoc,
  thongTinNguoiHoc,
  anhDaiDien,
  capNhatPhi,
} = require("../controllers/nguoi-hoc.controllers");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middleware");
const {
  uploadSingleImage,
} = require("../middlewares/uploads/upload-images.middleware");
const {
  checkExist,
} = require("../middlewares/validations/check-exist.middlewares");
const { NguoiHoc } = require("../models");

const nguoiHocRouter = Router();

/**
 * @swagger
 * /api/v1/NguoiHoc/AnhDaiDien:
 *   post:
 *     summary: Upload ảnh đại diện
 *     tags: [NguoiHoc]
 *     description: ""
 *     operationId: "uploadFile"
 *     consumes:
 *     - "multipart/form-data"
 *     produces:
 *     - "application/json"
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Token
 *       - in: formData
 *         name: File
 *         description: File to upload
 *         schema:
 *           type: file
 *     responses:
 *       200:
 *         description: Upload ảnh thành công
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/NguoiHoc/LayDanhSachNguoiHoc:
 *   get:
 *     summary: Lấy danh sách người học
 *     tags: [NguoiHoc]
 *     responses:
 *       200:
 *         description: Lấy danh sách người học thành công
 */

/**
 * @swagger
 * /api/v1/NguoiHoc/LayChiTietNguoiHoc/{id}:
 *   get:
 *     summary: Lấy chi tiết người học theo id
 *     tags: [NguoiHoc]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Người học id
 *     responses:
 *       200:
 *         description: Lấy chi tiết người học thành công
 *       404:
 *         description: Người học không tồn tại
 */

/**
 * @swagger
 * /api/v1/NguoiHoc/ThemNguoiHoc:
 *   post:
 *     summary: Thêm người học mới
 *     tags: [NguoiHoc]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NguoiHoc'
 *     responses:
 *       200:
 *         description: Tạo người học thành công
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/NguoiHoc/CapNhatNguoiHoc/{id}:
 *  put:
 *    summary: Cập nhật người học theo id
 *    tags: [NguoiHoc]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Người học id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NguoiHoc'
 *    responses:
 *      200:
 *        description: Cập nhật người học thành công
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/NguoiHoc'
 *      404:
 *        description: Người học không tồn tại
 *      500:
 *        description: Some error happened
 */

/**
 * @swagger
 * /api/v1/NguoiHoc/CapNhatPhi/{id}:
 *  put:
 *    summary: Cập nhật phí gia sư
 *    tags: [NguoiHoc]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Người học id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CapNhatPhi'
 *    responses:
 *      200:
 *        description: Cập nhật người học thành công
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CapNhatPhi'
 *      404:
 *        description: Người học không tồn tại
 *      500:
 *        description: Some error happened
 */

/**
 * @swagger
 * /api/v1/NguoiHoc/XoaNguoiHoc/{id}:
 *   delete:
 *     summary: Xóa người học theo id
 *     tags: [NguoiHoc]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Người học id
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Token
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Xóa người học thành công
 *       404:
 *         description: Người học không tồn tại
 */

/**
 * @swagger
 * /api/v1/NguoiHoc/ThongTinNguoiHoc:
 *   post:
 *     summary: Lấy thông tin những gia sư đã đặt lớp
 *     tags: [NguoiHoc]
 *     parameter: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ThongTinCaNhan'
 *     responses:
 *       200:
 *         description: Lấy thông tin người học thành công
 *       500:
 *         description: Some server error
 */

nguoiHocRouter.post(
  "/AnhDaiDien",
  authenticate,
  uploadSingleImage("AnhDaiDien"),
  anhDaiDien
);

nguoiHocRouter.get("/LayDanhSachNguoiHoc", layDanhSachNguoiHoc);
nguoiHocRouter.get(
  "/LayChiTietNguoiHoc/:id",
  checkExist(NguoiHoc),
  layChiTietNguoiHoc
);
nguoiHocRouter.post("/ThemNguoiHoc", taoNguoiHoc);
nguoiHocRouter.put(
  "/CapNhatNguoiHoc/:id",
  checkExist(NguoiHoc),
  capNhatNguoiHoc
);
nguoiHocRouter.put("/CapNhatPhi/:id", checkExist(NguoiHoc), capNhatPhi);
nguoiHocRouter.delete(
  "/XoaNguoiHoc/:id",
  authenticate,
  authorize("quanTri", "admin"),
  checkExist(NguoiHoc),
  xoaNguoiHoc
);
nguoiHocRouter.post("/ThongTinNguoiHoc", thongTinNguoiHoc);

module.exports = {
  nguoiHocRouter,
};
