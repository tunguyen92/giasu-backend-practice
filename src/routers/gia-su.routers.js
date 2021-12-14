const { Router } = require("express");
const {
  layDanhSachGiaSu,
  layChiTietGiaSu,
  taoGiaSu,
  capNhatGiaSu,
  xoaGiaSu,
  anhDaiDien,
  anhBangCap,
  anhCCCD,
  thongTinGiaSu,
} = require("../controllers/gia-su.controllers");

const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middleware");
const {
  uploadSingleImage,
  uploadMultipleImage,
} = require("../middlewares/uploads/upload-images.middleware");
const {
  checkExist,
} = require("../middlewares/validations/check-exist.middlewares");
const { GiaSu } = require("../models");

const giaSuRouter = Router();

/**
 * @swagger
 * /api/v1/GiaSu/AnhDaiDien:
 *   post:
 *     summary: Upload ảnh đại diện
 *     tags: [GiaSu]
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
 * /api/v1/GiaSu/AnhBangCap:
 *   post:
 *     summary: Upload ảnh bằng cấp
 *     tags: [GiaSu]
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
 * /api/v1/GiaSu/AnhCCCD:
 *   post:
 *     summary: Upload ảnh CMND/CCCD
 *     tags: [GiaSu]
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
giaSuRouter.post(
  "/AnhDaiDien",
  authenticate,
  uploadSingleImage("AnhDaiDien"),
  anhDaiDien
);
giaSuRouter.post(
  "/AnhBangCap",
  authenticate,
  uploadMultipleImage("AnhBangCap", 4),
  anhBangCap
);
giaSuRouter.post(
  "/AnhCCCD",
  authenticate,
  uploadMultipleImage("AnhCCCD", 2),
  anhCCCD
);

/**
 * @swagger
 * /api/v1/GiaSu/LayDanhSachGiaSu:
 *   get:
 *     summary: Lấy danh sách gia sư
 *     tags: [GiaSu]
 *     responses:
 *       200:
 *         description: Lấy danh sách gia sư thành công
 */

/**
 * @swagger
 * /api/v1/GiaSu/LayChiTietGiaSu/{id}:
 *   get:
 *     summary: Lấy chi tiết gia sư theo id
 *     tags: [GiaSu]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Gia sư id
 *     responses:
 *       200:
 *         description: Lấy chi tiết gia sư thành công
 *       404:
 *         description: Gia sư không tồn tại
 */

/**
 * @swagger
 * /api/v1/GiaSu/ThemGiaSu:
 *   post:
 *     summary: Thêm gia sư mới
 *     tags: [GiaSu]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GiaSu'
 *     responses:
 *       200:
 *         description: Tạo gia sư thành công
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/GiaSu/CapNhatGiaSu/{id}:
 *  put:
 *    summary: Cập nhật gia sư theo id
 *    tags: [GiaSu]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Gia sư id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/GiaSu'
 *    responses:
 *      200:
 *        description: Cập nhật gia sư thành công
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GiaSu'
 *      404:
 *        description: Gia sư không tồn tại
 *      500:
 *        description: Some error happened
 */

/**
 * @swagger
 * /api/v1/GiaSu/XoaGiaSu/{id}:
 *   delete:
 *     summary: Xóa gia sư theo id
 *     tags: [GiaSu]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Gia sư id
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
 *         description: Xóa gia sư thành công
 *       404:
 *         description: Gia sư không tồn tại
 */

/**
 * @swagger
 * /api/v1/GiaSu/ThongTinGiaSu:
 *   post:
 *     summary: Lấy thông tin đặt lớp của gia sư
 *     tags: [GiaSu]
 *     parameter: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ThongTinCaNhan'
 *     responses:
 *       200:
 *         description: Lấy thông tin gia sư thành công
 *       500:
 *         description: Some server error
 */

giaSuRouter.get("/LayDanhSachGiaSu", layDanhSachGiaSu);
giaSuRouter.get("/LayChiTietGiaSu/:id", checkExist(GiaSu), layChiTietGiaSu);
giaSuRouter.post("/ThemGiaSu", taoGiaSu);
giaSuRouter.put("/CapNhatGiaSu/:id", checkExist(GiaSu), capNhatGiaSu);
giaSuRouter.delete(
  "/XoaGiaSu/:id",
  authenticate,
  authorize("quanTri", "admin"),
  checkExist(GiaSu),
  xoaGiaSu
);
giaSuRouter.post("/ThongTinGiaSu", thongTinGiaSu);

module.exports = {
  giaSuRouter,
};
