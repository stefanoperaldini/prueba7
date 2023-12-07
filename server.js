"use strict";
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const { PORT } = process.env;

const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("Middleware 1");
  if (req.headers.authorization === "superSecreto") {
    next();
  } else {
    res.status(401).send("Identificación no correcta");
  }
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  res.status(200).send("Bienvenido!");
});

app.listen(PORT, () => {
  console.log("Escuchando en el puerto", PORT);
});
