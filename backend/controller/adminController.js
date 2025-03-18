const adminModel = require("../model/adminModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const AdminLogin = async(req , res)=>{
try {
    const {email , password} = req.body
    let salt = await bcrypt.genSalt(10)
    let hashpass = await bcrypt.hash(password , salt)
    const data = await adminModel.create(
        {
            email : email,
            password : hashpass
        }
    )
    const token = await jwt.sign({id : data._id} , process.env.SECRET_KEY , {expiresIn : "20d"})
    res.status(200).send(token)
} catch (error) {
    res.status(400).send(error)
}    
}

module.exports = {
    AdminLogin
}