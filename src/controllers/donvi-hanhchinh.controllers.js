const {
  TinhThanhPho,
  QuanHuyen,
  XaPhuongThiTran,
  sequelize,
} = require("../models");

const layDanhSachDonViHanhChinh = async (req, res) => {
  try {
    const danhSachDonViHanhChinh = await TinhThanhPho.findAll({
      include: [
        {
          model: QuanHuyen,
          as: "quanhuyen",
          include: [{ model: XaPhuongThiTran, as: "xaphuongthitran" }],
        },
      ],
    });
    res.status(200).send(danhSachDonViHanhChinh);

    // const querySql = `
    //   select * from tinhthanhphos
    //   left join quanhuyens
    //   on tinhthanhphos.matp = quanhuyens.matp
    //   union
    //   select * from tinhthanhphos
    //   right join quanhuyens
    //   on tinhthanhphos.matp = quanhuyens.matp;
    //   `;

    // const [result, metadata] = await sequelize.query(querySql);
    // res.status(200).send([result, metadata]);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  layDanhSachDonViHanhChinh,
};
