// This file is helping us to take the user uplaoded images & store it in our storage.

const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

// Added More Code Below This

const {v4: uuidv4} = require("uuid")

// Added More Code Above This


// This helps to store images in the folder - ./public/images/uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (req, file, cb) {
    const fn =
      crypto.randomBytes(16).toString("hex") + path.extname(file.originalname);
    cb(null, fn);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;