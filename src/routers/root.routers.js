const { Router } = require("express");
const { authRouter } = require("./auth.routers");
const { DatLopRouter } = require("./dat-lop.routers");
const { DonViHanhChinhRouter } = require("./donvi-hanhchinh.routers");
const { giaSuRouter } = require("./gia-su.routers");
const { nguoiHocRouter } = require("./nguoi-hoc.routers");
const rootRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     GiaSu:
 *       type: object
 *       required:
 *         - sdt
 *         - matKhau
 *         - email
 *         - tinhThanh
 *         - nguoiDung
 *         - vaiTro
 *         - hoTen
 *         - ngaySinh
 *         - gioiTinh
 *         - nguyenQuan
 *         - giongNoi
 *         - diaChi
 *         - soCCCD
 *         - anhDaiDien
 *         - anhBangCap
 *         - anhCCCD
 *         - truongHoc
 *         - nganhHoc
 *         - namTotNghiep
 *         - hienLa
 *         - uuDiem
 *         - monDay
 *         - lopDay
 *         - khuVucDay
 *         - thoiGianDay
 *
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated
 *         sdt:
 *           type: string
 *         matKhau:
 *           type: string
 *         email:
 *           type: string
 *         tinhThanh:
 *           type: string
 *         nguoiDung:
 *           type: string
 *         vaiTro:
 *           type: string
 *         hoTen:
 *           type: string
 *         ngaySinh:
 *           type: date
 *         nguyenQuan:
 *           type: string
 *         giongNoi:
 *           type: string
 *         diaChi:
 *           type: string
 *         soCCCD:
 *           type: string
 *         anhDaiDien:
 *           type: string
 *         anhBangCap:
 *           type: json
 *         anhCCCD:
 *           type: json
 *         truongHoc:
 *           type: string
 *         nganhHoc:
 *           type: string
 *         namTotNghiep:
 *           type: string
 *         hienLa:
 *           type: string
 *         uuDiem:
 *           type: string
 *         monDay:
 *           type: string
 *         lopDay:
 *           type: string
 *         khuVucDay:
 *           type: string
 *         thoiGianDay:
 *           type: string
 *
 *       example:
 *          id: 1
 *          sdt: "0645654812"
 *          matKhau: "123456"
 *          email: thanhtu@gmail.com
 *          tinhThanh: HCM
 *          nguoiDung: giaSu
 *          vaiTro: quanTri
 *          hoTen: Nguyễn Thị Sói
 *          ngaySinh: 1992-02-21
 *          gioiTinh: Nam
 *          nguyenQuan: HN
 *          giongNoi: Nam
 *          diaChi: 21 hà nội
 *          soCCCD: "212212121"
 *          anhDaiDien: ảnh
 *          anhBangCap: ảnh luôn
 *          anhCCCD: ảnh nốt
 *          truongHoc: ĐH SG
 *          nganhHoc: Toán
 *          namTotNghiep: "2102"
 *          hienLa: sinh viên
 *          uuDiem: Good boy
 *          monDay: Toán
 *          lopDay: 9, 10, 11
 *          khuVucDay: Q9, Q2
 *          thoiGianDay: tối 2, 4, 6
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     NguoiHoc:
 *       type: object
 *       required:
 *         - title
 *         - sdt
 *         - matKhau
 *         - nguoiDung
 *         - vaiTro
 *         - hoTen
 *         - gioiTinh
 *         - anhDaiDien
 *         - monHoc
 *         - lopHoc
 *         - tinhThanh
 *         - quanHuyen
 *         - phuongXa
 *         - duong
 *         - diaChi
 *         - mucLuong
 *         - soBuoi
 *         - thoiGian
 *         - thongTin
 *         - yeuCau
 *         - daGiao
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated
 *         sdt:
 *           type: string
 *         matKhau:
 *           type: string
 *         nguoiDung:
 *           type: string
 *         vaiTro:
 *           type: string
 *         hoTen:
 *           type: string
 *         anhDaiDien:
 *           type: string
 *         monHoc:
 *           type: string
 *         lopHoc:
 *           type: string
 *         tinhThanh:
 *           type: string
 *         quanHuyen:
 *           type: string
 *         phuongXa:
 *           type: string
 *         duong:
 *           type: string
 *         diaChi:
 *           type: string
 *         mucLuong:
 *           type: float
 *         phanTramPhi:
 *           type: integer
 *         phiGiaSu:
 *           type: float
 *         soBuoi:
 *           type: string
 *         thoiGian:
 *           type: string
 *         thongTin:
 *           type: string
 *         yeuCau:
 *           type: string
 *         daGiao:
 *           type: boolean
 *
 *       example:
 *         id: 1
 *         sdt: "054565132"
 *         matKhau: "123456"
 *         nguoiDung: nguoiHoc
 *         vaiTro: quanTri
 *         hoTen: Nguyễn Ti
 *         gioiTinh: Nữ
 *         anhDaiDien: ảnh
 *         monHoc: Toán Lý Hóa
 *         lopHoc: 12
 *         tinhThanh: HCM
 *         quanHuyen: Q2
 *         phuongXa: P3
 *         duong: Hà Huy Giáp
 *         diaChi: số nhà 123
 *         mucLuong: 1000000
 *         phanTramPhi: 40
 *         phiGiaSu: 400000
 *         soBuoi: 3 buổi
 *         thoiGian: tối 2, 4, 6
 *         thongTin: học sinh nữ
 *         yeuCau: giáo viên nam
 *         daGiao: false
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ThongTinCaNhan:
 *       type: object
 *       required:
 *         - sdt
 *       properties:
 *         sdt:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CapNhatPhi:
 *       type: object
 *       required:
 *         - phanTramPhi
 *         - phiGiaSu
 *       properties:
 *         mucLuong:
 *           type: float
 *         phanTramPhi:
 *           type: integer
 *         phiGiaSu:
 *           type: float
 *
 *       example:
 *          phanTramPhi: 20
 *          phiGiaSu: 40000
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DangNhap:
 *       type: object
 *       required:
 *         - sdt
 *         - matKhau
 *       properties:
 *         mucLuong:
 *           type: float
 *         sdt:
 *           type: string
 *         matKhau:
 *           type: string
 *
 *       example:
 *          sdt: 0986456214
 *          matKhau: 123456
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DangNhapFacebook:
 *       type: object
 *       required:
 *         - access_token
 *       properties:
 *         access_token:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DatLop:
 *       type: object
 *       required:
 *         - giaSuId
 *         - nguoiHocId
 *       properties:
 *         giaSuId:
 *           type: integer
 *         nguoiHocId:
 *           type: integer
 */

// http://localhost:8080/api/v1/GiaSu
rootRouter.use("/GiaSu", giaSuRouter);
rootRouter.use("/NguoiHoc", nguoiHocRouter);
rootRouter.use("/XacThuc", authRouter);
rootRouter.use("/DonViHanhChinh", DonViHanhChinhRouter);
rootRouter.use("/DatLop", DatLopRouter);

module.exports = {
  rootRouter,
};
