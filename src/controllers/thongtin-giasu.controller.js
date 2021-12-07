const { GiaSu, NguoiHoc, sequelize } = require("../models");

const thongTinGiaSu = async (req, res) => {
  try {
    const giaSu = await GiaSu.findAll({
      include: [
        {
          model: NguoiHoc,
          as: "datLop",
        },
      ],
    });
    res.status(200).send(giaSu);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  thongTinGiaSu,
};
