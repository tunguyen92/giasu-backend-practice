const { GiaSu } = require("../models");
const bcryptjs = require("bcryptjs");

const layDanhSachGiaSu = async (req, res) => {
  try {
    const danhSachGiaSu = await GiaSu.findAll({
      attributes: { exclude: ["matKhau"] },
    });
    res.status(200).send(danhSachGiaSu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const layChiTietGiaSu = async (req, res) => {
  try {
    const { id } = req.params;
    const chiTietGiaSu = await GiaSu.findByPk(id);
    res.status(200).send(chiTietGiaSu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const taoGiaSu = async (req, res) => {
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

const capNhatGiaSu = async (req, res) => {
  try {
    const { id } = req.params;
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

    const result = await GiaSu.update(
      {
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
      },
      {
        where: {
          id, //id: id
        },
      }
    );
    const chiTietGiaSu = await GiaSu.findByPk(id);
    res.status(200).send(chiTietGiaSu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const xoaGiaSu = async (req, res) => {
  try {
    const { id } = req.params;
    const chiTietGiaSu = await GiaSu.findByPk(id);
    await GiaSu.destroy({
      where: {
        id,
      },
    });
    res.status(200).send(chiTietGiaSu);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  layDanhSachGiaSu,
  layChiTietGiaSu,
  taoGiaSu,
  capNhatGiaSu,
  xoaGiaSu,
};
