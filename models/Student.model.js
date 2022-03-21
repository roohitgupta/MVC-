const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema({

    roll_id: {type:Number, required:true},
    current_batch: {type:String, required:true},
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("student", studentSchema);