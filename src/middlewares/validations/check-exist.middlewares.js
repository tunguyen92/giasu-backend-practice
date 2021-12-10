const checkExist = (Model) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const chiTiet = await Model.findOne({
      where: {
        id,
      },
    });
    if (chiTiet) {
      next();
    } else {
      res.status(404).send({
        message: "id không tồn tại",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const kiemTraSdtTrung = (Model) => async (req, res, next) => {
  try {
    const { sdt } = req.body;
    const chiTiet = await Model.findOne({
      where: {
        sdt,
      },
    });
    if (chiTiet) {
      next();
    } else {
      res.status(404).send({
        message: "sdt đã được sử dụng",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  checkExist,
  kiemTraSdtTrung,
};
