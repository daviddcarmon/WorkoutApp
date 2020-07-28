const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
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
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "Number is required.",
      },

      workOut: String,
    },
  ],
});


WorkoutSchema.method.setWorkOut = () => {
  let workOut = `Your upcoming workout is ${name} that will work on your ${type}. You will be doing ${sets} set of ${reps} reps with ${weightLb}.`;
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
