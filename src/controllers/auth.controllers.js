const { NguoiHoc, GiaSu } = require("../models");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const dangKiNguoiHoc = async (req, res) => {
  try {
    const {
      sdt,
      matKhau,
      hoTen,
      monHoc,
      lopHoc,
      tinhThanh,
      quanHuyen,
      phuongXa,
      duong,
      diaChi,
      mucLuong,
      soBuoi,
      thoiGian,
      thongTin,
      yeuCau,
    } = req.body;

    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(matKhau, salt);

    const nguoiHocMoi = await NguoiHoc.create({
      sdt,
      matKhau: hashPassword,
      hoTen,
      monHoc,
      lopHoc,
      tinhThanh,
      quanHuyen,
      phuongXa,
      duong,
      diaChi,
      mucLuong,
      soBuoi,
      thoiGian,
      thongTin,
      yeuCau,
    });
    res.status(201).send(nguoiHocMoi);
  } catch (error) {
    res.status(500).send(error);
  }
};

const dangKiGiaSu = async (req, res) => {
  try {
    const {
      sdt,
      matKhau,
      email,
      tinhThanh,
      nguoiDung,
      vaiTro,
      hoTen,
      ngaySinh,
      nguyenQuan,
      giongNoi,
      diaChi,
      soCCCD,
      anhDaiDien,
      anhBangCap,
      anhCCCD,
      truongHoc,
      nganhHoc,
      namTotNghiep,
      hienLa,
      uuDiem,
      monDay,
      lopDay,
      khuVucDay,
      thoiGianDay,
    } = req.body;

    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(matKhau, salt);

    const GiaSuMoi = await GiaSu.create({
      sdt,
      matKhau: hashPassword,
      email,
      tinhThanh,
      nguoiDung,
      vaiTro,
      hoTen,
      ngaySinh,
      nguyenQuan,
      giongNoi,
      diaChi,
      soCCCD,
      anhDaiDien,
      anhBangCap,
      anhCCCD,
      truongHoc,
      nganhHoc,
      namTotNghiep,
      hienLa,
      uuDiem,
      monDay,
      lopDay,
      khuVucDay,
      thoiGianDay,
    });
    res.status(201).send(GiaSuMoi);
  } catch (error) {
    res.status(500).send(error);
  }
};

const dangNhap = (Model) => async (req, res) => {
  try {
    const { sdt, matKhau } = req.body;

    const nguoiDung = await Model.findOne({
      where: {
        sdt,
      },
    });

    if (nguoiDung) {
      const isAuth = bcryptjs.compareSync(matKhau, nguoiDung.matKhau);
      if (isAuth) {
        //tạo JWT
        const payload = {
          id: nguoiDung.id,
          sdt: nguoiDung.sdt,
          vaiTro: nguoiDung.vaiTro,
        };
        const secretKey = process.env.SECRETKEY;
        const token = jwt.sign(payload, secretKey);

        res.status(200).send({
          message: "Đăng nhập thành công",
          token,
        });
      } else {
        res.status(400).send({
          message: "Mật khẩu không đúng",
        });
      }
    } else {
      res.status(404).send({
        message: "Sđt không đúng.",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const caiLaiMatKhau = async (req, res) => {
  try {
    const { sdt } = req.body;
    const matKhauMacDinh = crypto.randomBytes(10).toString("hex");
    const chiTietGiaSu = await GiaSu.findOne({
      where: {
        sdt,
      },
    });
    if (chiTietGiaSu) {
      const salt = bcryptjs.genSaltSync(10);
      const hashPassword = bcryptjs.hashSync(matKhauMacDinh, salt);

      chiTietGiaSu.matKhau = hashPassword;
      await chiTietGiaSu.save();

      res.status(200).send({
        messages: "Reset mật khẩu thành công",
        matKhauMoi: matKhauMacDinh,
      });
    } else {
      res.status(404).send({
        messages: "SĐT không chính xác",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  dangKiNguoiHoc,
  dangKiGiaSu,
  dangNhap,
  caiLaiMatKhau,
};
