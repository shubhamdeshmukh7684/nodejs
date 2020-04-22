const mongoose = require("mongoose")

var courseSchema = mongoose.Schema({
    courseName :{
        type: "String",
        required :"Required"
    },
    courseID : {
            type : "String"
    },
    courseDuration : {
        type:"String"
    },
    courseFee : {
        type: "String"
    }

});

mongoose.model("Course",courseSchema)