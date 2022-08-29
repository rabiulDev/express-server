require("dotenv").config("../.env");
const express = require("express");

const app = express();

console.log(process.env.PORT);

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Success" });
});

module.exports = app;
