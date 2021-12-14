const multer = require("multer");

const storage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   // cb(error, result)
  //   //đường dẫn thư mục lưu
  //   cb(null, `./public/images/`);
  // },
  //tên file gửi lên
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (!file.mimetype.match(/(jpg|jpeg|png)$/i)) {
    return cb(
      new Error("Bạn hãy đổi đuôi hình là .png, .jpg hoặc .jpeg"),
      false
    );
  }

  // const fileSize = parseInt(req.headers["content-length"]);
  // if (fileSize > 1000000) {
  //   return cb(new Error("Dung lượng ảnh cần nhỏ hơn"), false);
  // }

  cb(null, true);
};

const uploadSingle = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: fileFilter,
});
const uploadMultiple = multer({
  storage: storage,
  limits: {
    fileSize: 4000000,
  },
  fileFilter: fileFilter,
});

const uploadSingleImage = (typeImage) => {
  return uploadSingle.single(typeImage);
};

const uploadMultipleImage = (typeImage, quantity) => {
  return uploadMultiple.array(typeImage, quantity);
};

module.exports = {
  uploadSingleImage,
  uploadMultipleImage,
};
