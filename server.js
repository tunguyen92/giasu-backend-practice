const express = require("express");
const dotenv = require("dotenv");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const { rootRouter } = require("./src/routers/root.routers");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./src/routers/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

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
