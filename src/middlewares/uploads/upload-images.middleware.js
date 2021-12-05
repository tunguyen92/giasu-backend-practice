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
  if (!file.mimetype.match(/png||jpg||jpeg$i/)) {
    return cb(
      new Error("Bạn hãy đổi đuôi hình là .png, .jpg hoặc .jpeg"),
      false
    );
  }

  const fileSize = parseInt(req.headers["content-length"]);
  if (fileSize > 500000) {
    return cb(new Error("Kích thước ảnh phải nhỏ hơn 500kb"), false);
  }

  cb(null, true);
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 500000,
  },
  fileFilter: fileFilter,
});

const uploadSingleImage = (typeImage) => {
  return upload.single(typeImage);
};

const uploadMultipleImage = (typeImage, quantity) => {
  return upload.array(typeImage, quantity);
};

module.exports = {
  uploadSingleImage,
  uploadMultipleImage,
};
