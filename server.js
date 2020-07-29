const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
});

const dataBase = "WorkoutPlan";
const collections = ["workouts"];

const db = require("./models");

const routes = require("./controller/routes");

app.use(routes);

app.listen(3030, () => {
  console.log(`App running at port 3030`);
});
