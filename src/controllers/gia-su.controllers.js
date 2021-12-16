const { GiaSu, DatLop, NguoiHoc } = require("../models");
const bcryptjs = require("bcryptjs");
const { cloudinary } = require("../utils/cloudinary");
const moment = require("moment");

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
      gioiTinh,
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
      gioiTinh,
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
      gioiTinh,
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

    const giaSuCapNhat = await GiaSu.findByPk(id);
    const sdtBanDau = giaSuCapNhat.sdt === sdt ? undefined : sdt;

    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(matKhau, salt);

    const result = await GiaSu.update(
      {
        sdt: sdtBanDau,
        matKhau: hashPassword,
        email,
        tinhThanh,
        nguoiDung,
        vaiTro,
        hoTen,
        ngaySinh,
        gioiTinh,
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
    const { nguoiDung, file } = req;
    const userUploadAvatar = await GiaSu.findByPk(nguoiDung.id);

    // cloudinary.v2.uploader.upload(file, options, callback);
    const result = await cloudinary.uploader.upload(file.path, {
      use_filename: true,
      folder: `/giasumantiep/giasu/anhdaidien/${nguoiDung.sdt}`,
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

const anhBangCap = async (req, res) => {
  try {
    const { nguoiDung, files } = req;
    const anhBangCapGiaSu = await GiaSu.findByPk(nguoiDung.id);
    const urls = [];

    for (const file of files) {
      const { path } = file;
      const result = await cloudinary.uploader.upload(path, {
        use_filename: true,
        folder: `/giasumantiep/giasu/anhbangcap/${nguoiDung.sdt}`,
        transformation: {
          background: "black",
          height: 600,
          width: 1200,
          crop: "pad",
        },
      });
      urls.push(result.url);
    }

    anhBangCapGiaSu.anhBangCap = urls;
    await anhBangCapGiaSu.save();

    res.status(200).json({
      message: "Upload ảnh thành công",
      urls: urls,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const anhCCCD = async (req, res) => {
  try {
    const { nguoiDung, files } = req;
    const anhBangCapGiaSu = await GiaSu.findByPk(nguoiDung.id);
    const urls = [];

    for (const file of files) {
      const { path } = file;
      const result = await cloudinary.uploader.upload(path, {
        use_filename: true,
        folder: `/giasumantiep/giasu/anhCCCD/${nguoiDung.sdt}`,
        transformation: {
          background: "black",
          height: 400,
          width: 600,
          crop: "pad",
        },
      });
      urls.push(result.url);
    }

    anhBangCapGiaSu.anhCCCD = urls;
    await anhBangCapGiaSu.save();

    res.status(200).json({
      message: "Upload ảnh thành công",
      urls: urls,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const thongTinGiaSu = async (req, res) => {
  try {
    const { sdt } = req.body;
    const giaSu = await GiaSu.findAll({
      where: {
        sdt,
      },
      include: [
        {
          model: DatLop,
          as: "datLop",
          attributes: { exclude: ["giaSuId", "nguoiHocId"] },
          include: [{ model: NguoiHoc, as: "nguoiHoc" }],
        },
      ],
    });
    res.status(200).send(giaSu);
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
  anhCCCD,
  thongTinGiaSu,
};
