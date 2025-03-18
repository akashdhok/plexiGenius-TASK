const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
    title : String,
    description : String,
    employee : String,
    priority : String,
    deadline : String,
    status : String,
})


module.exports = mongoose.model("task" , taskSchema)

