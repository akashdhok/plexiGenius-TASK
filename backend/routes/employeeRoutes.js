const express = require("express")
const route = express.Router()
const empController = require("../controller/empController")

route.post("/registration" , empController.RegisterEmployee)
route.get("/displayData" , empController.DisplayData)
route.post("/deleteData" , empController.deleteData)
route.post("/editdata" , empController.EditData)
route.post("/updatedata" , empController.UpdateData)
route.post("/search" , empController.SearchData)
route.get("/getname" , empController.getname)
route.get("/totalemp" , empController.totalEmp)
module.exports = route