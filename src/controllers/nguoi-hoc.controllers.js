const { NguoiHoc, DatLop, GiaSu } = require("../models");
const bcryptjs = require("bcryptjs");
const { cloudinary } = require("../utils/cloudinary");

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
      gioiTinh,
      anhDaiDien,
      monHoc,
      lopHoc,
      tinhThanh,
      quanHuyen,
      phuongXa,
      duong,
      diaChi,
      mucLuong,
      phanTramPhi,
      phiGiaSu,
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
      gioiTinh,
      anhDaiDien,
      monHoc,
      lopHoc,
      tinhThanh,
      quanHuyen,
      phuongXa,
      duong,
      diaChi,
      mucLuong,
      phanTramPhi,
      phiGiaSu,
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
      gioiTinh,
      anhDaiDien,
      monHoc,
      lopHoc,
      tinhThanh,
      quanHuyen,
      phuongXa,
      duong,
      diaChi,
      mucLuong,
      phanTramPhi,
      phiGiaSu,
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
        gioiTinh,
        anhDaiDien,
        monHoc,
        lopHoc,
        tinhThanh,
        quanHuyen,
        phuongXa,
        duong,
        diaChi,
        mucLuong,
        phanTramPhi,
        phiGiaSu,
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

const capNhatPhi = async (req, res) => {
  try {
    const { id } = req.params;
    const { phanTramPhi, phiGiaSu } = req.body;

    const result = await NguoiHoc.update(
      {
        phanTramPhi,
        phiGiaSu,
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

const anhDaiDien = async (req, res) => {
  try {
    const { nguoiDung, file } = req;

    const userUploadAvatar = await NguoiHoc.findByPk(nguoiDung.id);

    // cloudinary.v2.uploader.upload(file, options, callback);
    const result = await cloudinary.uploader.upload(file.path, {
      use_filename: true,
      folder: `/giasumantiep/nguoihoc/anhdaidien/${nguoiDung.sdt}`,
      format: "png",
      // Giảm dung lượng hình cho vào kích thước 300x300
      transformation: {
        background: "black",
        height: 300,
        width: 300,
        crop: "pad",
        quality: "auto",
        fetch_format: "auto",
      },
    });

    userUploadAvatar.anhDaiDien = result.url;
    await userUploadAvatar.save();

    res.status(200).json({
      message: "Upload avatar thành công",
      url: result.url,
    });
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
  anhDaiDien,
  thongTinNguoiHoc,
  capNhatPhi,
};
