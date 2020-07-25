const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name of exercise is required.",
  },
  type: {
    type: String,
    trim: true,
    required: "Type of exercise is required(arms, back, legs...ect).",
  },
  weight: {
    type: Number,
    required: "Number is required. How much are we lifting",
  },
  sets: {
    type: Number,
    required: "Number is required.",
  },
  reps: {
    type: Number,
    required: "Number is required.",
  },
  duraction: {
    type: Number,
    required: "Number is required.",
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
