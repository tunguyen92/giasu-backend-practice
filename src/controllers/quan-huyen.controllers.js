const { QuanHuyen } = require("../models");

const layDanhSachQuanHuyen = async (req, res) => {
  try {
    const danhSachQuanHuyen = await QuanHuyen.findAll({
      attributes: { exclude: ["id", "createdAt", "updatedAt"] },
    });
    res.status(200).send(danhSachQuanHuyen);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  layDanhSachQuanHuyen,
};
