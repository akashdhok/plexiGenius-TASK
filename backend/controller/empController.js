
const empModel = require("../model/empMode")

const RegisterEmployee = async(req , res)=>{
const{name , email , phone , dept , status} = req.body

try {
    let data = await empModel.create({
        name : name,
        email : email,
        phone : phone,
        dept : dept,
        status : status
    })
    res.send(data)
} catch (error) {
    res.send(error)
}

}

const DisplayData = async(req , res)=>{
    let data = await empModel.find()
    res.status(200).send(data)
}


const deleteData=  async(req , res)=>{
  let {id} = req.body;
  try {
    let data = await empModel.findByIdAndDelete(id)
    res.status(200).send("deleted")
  } catch (error) {
    res.send(error)
  }
}
const EditData = async(req , res)=>{
    const {id} = req.body;
    let data = await empModel.findById(id)
    res.send(data)
}

const UpdateData = async(req , res)=>{
    const{_id} = req.body;
    const data = await empModel.findByIdAndUpdate( _id , req.body)
    res.send(data)
}
const SearchData  = async(req , res)=>{
    const { name} = req.body;
    let data = await empModel.find({name : name})
    res.send(data)
}
const getname = async(req , res)=>{
    const data = await empModel.find()
    res.send(data)
}
const totalEmp = async(req , res)=>{
     let count = await empModel.countDocuments()
        res.json({ count });
}
module.exports = {
    RegisterEmployee,
    DisplayData,
    deleteData,
    EditData,
    UpdateData,
    SearchData,
    getname,
    totalEmp
}