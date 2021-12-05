const { Router } = require("express");
const {
  layDanhSachGiaSu,
  layChiTietGiaSu,
  taoGiaSu,
  capNhatGiaSu,
  xoaGiaSu,
  anhDaiDien,
  anhBangCap,
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

giaSuRouter.post("/AnhDaiDien", uploadSingleImage("AnhDaiDien"), anhDaiDien);
giaSuRouter.post(
  "/AnhBangCap",
  uploadMultipleImage("AnhBangCap", 2),
  anhBangCap
);

giaSuRouter.get("/", layDanhSachGiaSu);
giaSuRouter.get("/:id", checkExist(GiaSu), layChiTietGiaSu);
giaSuRouter.post("/", taoGiaSu);
giaSuRouter.put("/:id", checkExist(GiaSu), capNhatGiaSu);
giaSuRouter.delete(
  "/:id",
  authenticate,
  authorize("quanTri"),
  checkExist(GiaSu),
  xoaGiaSu
);

module.exports = {
  giaSuRouter,
};
