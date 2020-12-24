import express from "express";
//const express = require("express");
import morgan from "morgan";
import path from "path";
import color from "colors";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connecteDB from "./config/db.js";
import businessRouter from "./routes/businessRoute.js";
import userRouter from "./routes/userRoute.js";
import uploadRouter from "./routes/uploadRoute.js";

dotenv.config();

//connect to mlab
connecteDB();

const app = express();
app.use(cors());
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/business", businessRouter);
app.use("/api/user", userRouter);
app.use("/api/upload", uploadRouter);

//First route
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/buz", businessRouter);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Serving Running in Development Mode on  ${PORT}`)
);
