const mongoose = require('mongoose');

const informationSchema = new mongoose.Schema({
    fullName: {type: String , required: true},
    workHours: {type: String , required: true},
    sickLeave : {type: Number ,required : true},
    personalLeave : {type : String , required : true},
    vacationLeave : {type : String , required : true},
    offsiteWork : {type : String , required : true},
    nonWorkingDays : {type : String , required : true},
},{timestamps:true , versionKey:false});

module.exports = mongoose.model('information',informationSchema);