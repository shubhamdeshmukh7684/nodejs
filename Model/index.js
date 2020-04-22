const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/myown", (error)=>{
    if(!error)
    {
        console.log("Success connected");
    }
    else{
        console.log("Error in connecting database")
    }
});

const Course = require("./course.model");