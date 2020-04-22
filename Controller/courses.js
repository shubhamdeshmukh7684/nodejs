const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CourseModel = mongoose.model("Course");

router.get("/add", (req,res)=>{
    res.render("add-course");
});

router.post("/add", (req,res)=>{
    var course = new CourseModel();
    course.courseName = req.body.courseName;
    course.courseDuration = req.body.courseDuration;
    course.courseFee = req.body.courseFee;
    course.courseID = Math.random() +"";

    course.save((err,doc)=>{
        if(!err)
        {
            res.redirect("/course/list");

        }
        else
        {
            res.send("Error ouccured during post");
        }
    });
});

router.get("/list",(req,res)=>{

    // var course = new CourseModel();
    // course.courseName = 'NodeJS';
    // course.courseID = '10';
    // course.save();

    CourseModel.find((err,docs)=>{
        if(!err)
        {
            console.log(docs)
            res.render("list",{data : docs})
        }
        else{
            res.send("Error in Course Controller")
        }
    })
    
});

module.exports = router;