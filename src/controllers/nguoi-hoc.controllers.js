const { NguoiHoc, DatLop, GiaSu } = require("../models");
const bcryptjs = require("bcryptjs");

const layDanhSachNguoiHoc = async (req, res) => {
  try {
    const danhSachNguoiHoc = await NguoiHoc.findAll({
      attributes: { exclude: ["matKhau"] },
    });
    res.status(200).send(danhSachNguoiHoc);
  } catch (error) {
    res.status(500).send(error);
  }
};

const layChiTietNguoiHoc = async (req, res) => {
  try {
    const { id } = req.params;
    const chiTietNguoiHoc = await NguoiHoc.findByPk(id);
    res.status(200).send(chiTietNguoiHoc);
  } catch (error) {
    res.status(500).send(error);
  }
};

const taoNguoiHoc = async (req, res) => {
  try {
    const {
      sdt,
      matKhau,
      nguoiDung,
      vaiTro,
      hoTen,
      anhDaiDien,
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
      daGiao,
    } = req.body;

    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(matKhau, salt);

    const nguoiHocMoi = await NguoiHoc.create({
      sdt,
      matKhau: hashPassword,
      nguoiDung,
      vaiTro,
      hoTen,
      anhDaiDien,
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
      daGiao,
    });
    res.status(201).send(nguoiHocMoi);
  } catch (error) {
    res.status(500).send(error);
  }
};

const capNhatNguoiHoc = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      sdt,
      matKhau,
      nguoiDung,
      vaiTro,
      hoTen,
      anhDaiDien,
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
      daGiao,
    } = req.body;

    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(matKhau, salt);

    const result = await NguoiHoc.update(
      {
        sdt,
        matKhau: hashPassword,
        nguoiDung,
        vaiTro,
        hoTen,
        anhDaiDien,
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
        daGiao,
      },
      {
        where: {
          id, //id: id
        },
      }
    );
    const chiTietNguoiHoc = await NguoiHoc.findByPk(id);
    res.status(200).send(chiTietNguoiHoc);
  } catch (error) {
    res.status(500).send(error);
  }
};

const xoaNguoiHoc = async (req, res) => {
  try {
    const { id } = req.params;
    const chiTietNguoiHoc = await NguoiHoc.findByPk(id);
    await NguoiHoc.destroy({
      where: {
        id,
      },
    });
    res.status(200).send(chiTietNguoiHoc);
  } catch (error) {
    res.status(500).send(error);
  }
};

const thongTinNguoiHoc = async (req, res) => {
  try {
    const { sdt } = req.body;
    const nguoiHoc = await NguoiHoc.findAll({
      where: {
        sdt,
      },
      include: [
        {
          model: DatLop,
          as: "datLop",
          attributes: { exclude: ["nguoiHocId", "giaSuId"] },
          include: [{ model: GiaSu, as: "giaSu" }],
        },
      ],
    });
    res.status(200).send(nguoiHoc);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  layDanhSachNguoiHoc,
  layChiTietNguoiHoc,
  taoNguoiHoc,
  capNhatNguoiHoc,
  xoaNguoiHoc,
  thongTinNguoiHoc,
};
