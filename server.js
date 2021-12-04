const express = require("express");
const dotenv = require("dotenv");
const { rootRouter } = require("./src/routers/root.routers");
const app = express();
const path = require("path");
const { configEnv } = require("./src/config");

dotenv.config();
//setup định dạng body thành json
app.use(express.json());

const pathPublicDirectory = path.join(__dirname, "./public");
// http://localhost:8080/public <=> folder public
app.use("/public", express.static(pathPublicDirectory));

app.get("/", (req, res) => {
  res.send("Helô Tú");
});

// http://localhost:8080/api/v1/
app.use("/api/v1", rootRouter);

// http://localhost:8080
const port = configEnv.server.port;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
