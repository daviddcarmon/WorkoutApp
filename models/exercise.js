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
  duration: {
    type: Number,
    required: "Number is required.",
  },

  workOut: String,
});

ExerciseSchema.method.setWeightLb = () => {
  let weighLb = `${weight}lb.`;
  return weightLb
};

// ExerciseSchema.method.setNumber = () => {
//   sets = `${sets} sets.`
// }

ExerciseSchema.method.setWorkOut = () => {
  let workOut = `Your upcoming workout is ${name} that will work on your ${type}. You will be doing ${sets} set of ${reps} reps with ${weightLb}.`;
};

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
