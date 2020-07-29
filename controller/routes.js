const express = require("express")
const { Exercise, Workout } = require("../models")
const router = express.Router()
const path = require("path")

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
  router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  
  router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });



router.get("/api/workouts", (req,res) => {
    Workout.find({}).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get("/api/workouts/range", (req,res) => {
    Workout.find({}).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.put("/api/workouts/:id", (req,res) => {
    if (req.body.name) {
      Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } }
      )
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    }
});
  
router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
});
  
module.exports = router;