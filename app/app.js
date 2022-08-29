require("dotenv").config("../.env");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use([morgan("dev"), cors(), express.json()]);

app.get("/health", (_req, res) => {
  throw new Error("Error");

  res.status(200).json({ message: "Success" });
});

app.use((_req, _res, next) => {
  const error = new Error("Resource Not Found");
  error.status = 404;

  next(error);
});

app.use((error, req, res, next) => {
  if (error.status) {
    res.status(error.status).json({
      message: error.message,
    });
  }
});

module.exports = app;
