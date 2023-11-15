import express from "express";
const router = express.Router();

//Get dùng để lấy dữ liệu về
router.get("/", function (req, res) {
  res.send("Get students");
});

//get student by id
router.get("/:id", function (req, res) {
  res.send("get student by id " + req?.params?.id);
});

router.post("/", function (req, res) {
  res.send("POST insert students");
});

//Patch nó sẽ tìm trong Db nếu có đối tựng thì sửa đổi như PUT còn không sẽ thêm mới như POST
router.patch("/", (req, res) => {
  res.send("patch students");
});

export default router;
