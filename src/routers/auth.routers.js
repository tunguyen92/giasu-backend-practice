const { Router } = require("express");
const {
  dangNhap,
  caiLaiMatKhau,
  dangKiNguoiHoc,
  dangKiGiaSu,
  dangNhapBangFacebook,
} = require("../controllers/auth.controllers");

const authRouter = Router();
const { NguoiHoc, GiaSu } = require("../models");

const passport = require("passport");
const facebookStrategy = require("passport-facebook-token");
const dotenv = require("dotenv");
dotenv.config();

const facebookLogin =
  (Model) => async (accessToken, refreshToken, profile, done) => {
    try {
      // console.log(profile);
      const email = profile.emails[0].value;

      const nguoiDung = await Model.findOne({
        where: {
          email,
        },
      });
      let nguoiDungDangNhap = nguoiDung;
      if (!nguoiDung) {
        nguoiDungDangNhap = await new Model({
          email,
          nguoiDung: "giaSu",
          anhDaiDien: profile.photos[0].value,
        }).save();
      }

      done(null, nguoiDungDangNhap);
    } catch (error) {
      done(error);
    }
  };

passport.use(
  "fbAuth",
  new facebookStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
    facebookLogin(GiaSu)
  )
);

/**
 * @swagger
 * /api/v1/XacThuc/DangKiNguoiHoc:
 *   post:
 *     summary: Admin đăng kí người học
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NguoiHoc'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/XacThuc/DangKiGiaSu:
 *   post:
 *     summary: Admin đăng kí gia sư
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GiaSu'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/XacThuc/DangNhapNguoiHoc:
 *   post:
 *     summary: Người học đăng nhập
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DangNhap'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Some server error
 */
/**
 * @swagger
 * /api/v1/XacThuc/DangNhapGiaSu:
 *   post:
 *     summary: Gia sư đăng nhập
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DangNhap'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/XacThuc/CaiLaiMatKhau:
 *   post:
 *     summary: Cài lại mật khẩu qua e-mail
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ThongTinCaNhan'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/v1/XacThuc/Facebook/Login:
 *   post:
 *     summary: Lấy token từ Facebook
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DangNhapFacebook'
 *     decription: Nhập access_token từ Facebook
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Some server error
 */

authRouter.post("/DangKiNguoiHoc", dangKiNguoiHoc);

authRouter.post("/DangKiGiaSu", dangKiGiaSu);

authRouter.post("/DangNhapNguoiHoc", dangNhap(NguoiHoc));

authRouter.post("/DangNhapGiaSu", dangNhap(GiaSu));

authRouter.post("/CaiLaiMatKhau", caiLaiMatKhau);

authRouter.post(
  "/Facebook/Login",
  passport.authenticate("fbAuth", { session: false }),
  dangNhapBangFacebook
);

module.exports = {
  authRouter,
};
