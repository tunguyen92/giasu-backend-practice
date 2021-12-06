const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("token");

  try {
    const secretKey = process.env.SECRETKEY;
    const decode = jwt.verify(token, secretKey);

    req.nguoiDung = decode;
    next();
  } catch (error) {
    res.status(401).send({
      message: "Bạn chưa đăng nhập",
    });
  }
};

const authorize = (arrayRole) => (req, res, next) => {
  const { nguoiDung } = req;
  if (arrayRole.includes(nguoiDung.vaiTro)) {
    next();
  } else {
    res.status(403).send({
      message: "Bạn không có quyền thực hiện tao tác này",
    });
  }
};

module.exports = {
  authenticate,
  authorize,
};
