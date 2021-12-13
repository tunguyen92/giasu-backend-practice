const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const { rootRouter } = require("./src/routers/root.routers");
const path = require("path");
const passport = require("passport");

// Tùy chỉnh options swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0",
      description: "This is a `Tutoring center` server.",
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

app.use(passport.initialize());

//setup định dạng body thành json
app.use(express.json({ extended: false }));

const pathPublicDirectory = path.join(__dirname, "./public");
// http://localhost:8080/public <=> folder public
app.use("/public", express.static(pathPublicDirectory));

app.get("/", (req, res) => {
  res.send("Hello World! This is Home Page Route");
});

// http://localhost:8080/api/v1/
app.use("/api/v1", rootRouter);

// http://localhost:8080
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
