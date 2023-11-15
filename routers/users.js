import express from "express";
const { query, validationResult } = require("express-validator");
const router = express.Router();

//Get dùng để lấy dữ liệu về
router.get("/", function (req, res) {
  res.send("Get users");
});

//Post dùng để tạo dữ liệu mới
router.post("/login", function (req, res) {
  //email, password
  // debugger;
  const { email, password } = req.body;
  res.send("Post Login users" + email);
});

router.post("/register", function (req, res) {
  res.send("POST register users");
});

export default router;
