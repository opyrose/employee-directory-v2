const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

const routes = require ("./routes.js")

app.listen(PORT, () => {
  `Listening on port ${PORT}...`;
});
