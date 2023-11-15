import express from "express";
import { usersRouter, studentsRouter } from "./routers";
require("dotenv").config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

//router // router phải có đuổi dạng ntn: localhost::/users/PATHS
app.use("/users", usersRouter);
app.use("/students", studentsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
