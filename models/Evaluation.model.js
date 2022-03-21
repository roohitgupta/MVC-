const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema({

    date_of_eval: {type:Date, required:true},
    instructor_id: {type: mongoose.Schema.Types.ObjectId, ref:"user" ,required: true},
    batch_id: {type: mongoose.Schema.Types.ObjectId, ref:"batch", required: true}

})

module.exports = mongoose.model("evalData", evaluationSchema);