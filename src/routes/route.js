const express = require('express');
const router = express.Router();
const InternrModel= require("../models/internModel.js")
const InternController= require("../controllers/internController")
const CollegeController= require("../controllers/collegeController")



router.post("/functionup/interns", InternController.intern)

router.post("/functionup/colleges", CollegeController.createCollege)

router.get("/functionup/collegeDetails", CollegeController.collegeDetails)


module.exports = router;