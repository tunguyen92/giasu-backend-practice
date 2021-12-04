const { TinhThanhPho } = require("../models");

const layDanhSachTinhThanhPho = async (req, res) => {
  try {
    const danhSachTinhThanhPho = await TinhThanhPho.findAll({
      attributes: { exclude: ["id", "createdAt", "updatedAt"] },
    });
    res.status(200).send(danhSachTinhThanhPho);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  layDanhSachTinhThanhPho,
};
