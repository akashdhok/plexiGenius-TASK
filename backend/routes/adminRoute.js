const express = require("express")
const route = express.Router()
const controller = require("../controller/adminController")


route.post("/login" , controller.AdminLogin )




module.exports = route