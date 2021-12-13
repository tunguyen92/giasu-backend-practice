const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! This is Home Page Route");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
