const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const adminRoute  = require("./routes/adminRoute")
const empRoute = require("./routes/employeeRoutes")
const taskRoute = require("./routes/taskRoute")
require("dotenv").config()
const Port = process.env.PORT;
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("DB Connected")
})
app.use("/admin" , adminRoute)
app.use("/employee" , empRoute)
app.use("/task" , taskRoute)

app.listen(Port , ()=>{
    console.log(`listening at the port of ${Port}`)
})