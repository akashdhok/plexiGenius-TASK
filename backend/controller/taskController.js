const taskModel = require("../model/taskModel")


const GiveTask = async(req , res)=>{
    const{title , description , employee , priority , deadline , status} = req.body;
    const data = await taskModel.create({
        title : title,
        description : description,
        employee : employee,
        priority : priority,
        deadline : deadline,
        status : status,
    })
    res.send("okk")
}

const displayTask = async(req ,res)=>{
    let data =  await taskModel.find()
    res.send(data)
}
const DeleteTask = async(req , res)=>{
    const {id} = req.body;
    let data = await taskModel.findByIdAndDelete(id)
    res.send("Data deleted")
}

const editTask = async(req , res)=>{
    const {id} = req.body;
    const data = await taskModel.findById(id)
    res.send(data)
}
const updateData = async(req , res)=>{
    const {_id} = req.body;
    const data = await taskModel.findByIdAndUpdate(_id , req.body)
    res.send("updated")
}
const getCount = async(req , res)=>{
    let count = await taskModel.countDocuments()
    res.json({ count });
}
const getStatus = async(req , res)=>{
    const completedCount = await taskModel.countDocuments({ status: "Completed" }); 
    const pendingCount = await taskModel.countDocuments({ status: "Pending" }); 
    res.json({
        completed: completedCount,
        pending: pendingCount
    });
}
module.exports = {
    GiveTask,
    displayTask,
    DeleteTask,
    editTask,
    updateData,
    getCount,
    getStatus
}