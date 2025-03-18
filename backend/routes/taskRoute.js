const express = require("express")
const route = express.Router()
const taskcontroller = require("../controller/taskController")

route.post("/givetask" , taskcontroller.GiveTask )

route.get("/displayTask" , taskcontroller.displayTask)
route.post("/deleteTask" , taskcontroller.DeleteTask)
route.post("/editTask" , taskcontroller.editTask)
route.post("/update" , taskcontroller.updateData)
module.exports = route