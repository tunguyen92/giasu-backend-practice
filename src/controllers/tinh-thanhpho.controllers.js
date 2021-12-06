const { TinhThanhPho, QuanHuyen, sequelize } = require("../models");

const layDanhSachTinhThanhPho = async (req, res) => {
  try {
    // const danhSachTinhThanhPho = await TinhThanhPho.findAll({
    //   include: [{ model: QuanHuyen }],
    // });
    // res.status(200).send(danhSachTinhThanhPho);

    const querySql = `select * from tinhthanhphos;`;

    const [result, metadata] = await sequelize.query(querySql);
    res.status(200).send([result, metadata]);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  layDanhSachTinhThanhPho,
};
