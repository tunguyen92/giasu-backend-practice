const { XaPhuongThiTran } = require("../models");

const layDanhSachXaPhuongThiTran = async (req, res) => {
  try {
    const danhSachXaPhuongThiTran = await XaPhuongThiTran.findAll({
      attributes: { exclude: ["id", "createdAt", "updatedAt"] },
    });
    res.status(200).send(danhSachXaPhuongThiTran);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  layDanhSachXaPhuongThiTran,
};
