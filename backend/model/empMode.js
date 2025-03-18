const mongoose = require("mongoose")

const empSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    dept : String,
    status : String,
})

module.exports = mongoose.model("employee" , empSchema)