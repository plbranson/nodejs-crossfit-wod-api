const express = require("express");

const PORT = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
