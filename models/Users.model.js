const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    gender: {type:String, enum:["Male", "Female"], default: "Male"},
    birthDate: {type:Date, required:false},
},
{
versionKey: false,
timestamps: true
});

module.exports = mongoose.model("user", userSchema);
