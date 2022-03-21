const mongoose = require("mongoose")

const submissionSchema = new mongoose.Schema({

    evaluation_id: {type: mongoose.Schema.Types.ObjectId, ref:"evalData"},
    student_id: {type: mongoose.Schema.Types.ObjectId, ref:"user"},
    marks: {type:Number, required:true}

},
{
    versionKey: false,
    timestamps: true
})


module.exports = mongoose.model("submission", submissionSchema);