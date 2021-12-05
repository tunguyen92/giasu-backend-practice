const { GiaSu } = require("../models");
const bcryptjs = require("bcryptjs");
const { cloudinary } = require("../utils/cloudinary");
const fs = require("fs");
require("dotenv").config();

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

const anhDaiDien = async (req, res) => {
  try {
    // cloudinary.v2.uploader.upload(file, options, callback);
    const result = await cloudinary.uploader.upload(req.file.path, {
      use_filename: true,
      folder: "/giasumantiep/avatar-giasu",
      transformation: {
        background: "black",
        height: 300,
        width: 300,
        crop: "pad",
      },
    });

    res.status(200).json({
      message: "Upload avatar thành công",
      url: result.url,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const anhBangCap = async (req, res) => {
  try {
    const urls = [];

    for (const file of req.files) {
      const { path } = file;
      const result = await cloudinary.uploader.upload(path, {
        use_filename: true,
        folder: "/giasumantiep/anhbangcap-giasu",
        transformation: {
          background: "black",
          height: 400,
          width: 600,
          crop: "pad",
        },
      });
      urls.push(result.url);
    }

    res.status(200).json({
      message: "Upload ảnh thành công",
      urls: urls,
    });
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
  anhDaiDien,
  anhBangCap,
};
