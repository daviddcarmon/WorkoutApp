const express = require("express")
const { Exercise } = require("../models")
const router = express.Router()

// const db = mongojs(,)

router.get("/", (res,req) => {
    res.send()
})


router.post("/workout", (req,res) => {
//   db. .insert(req.body)  
})


router.get("/exercise", (res,req) => {
    Exercise.find({}).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})