const { DatLop } = require("../models");

const datLop = async (req, res) => {
  try {
    const { giaSuId, nguoiHocId } = req.body;

    const datLop = await DatLop.create({
      giaSuId,
      nguoiHocId,
    });
    res.status(201).send(datLop);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  datLop,
};
