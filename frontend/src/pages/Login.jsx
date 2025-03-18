import React, { useState } from 'react'
import BASE_URL from "../config"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const[input , setInput] = useState({})
    const navigate = useNavigate()
    const changeHandler = (e)=>{
        let{name , value} = e.target;
        setInput({
            ...input,
            [name] : value
        })
    }
    const submitHandler = async(e)=>{
        e.preventDefault()
        try {
            let api = `${BASE_URL}/admin/login`
            let res = await axios.post(api , input)
            alert("logged in ")
            console.log(res.data)
            localStorage.setItem("token" , res.data)
            
            navigate("/dash")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", minHeight: "100vh", alignItems: "center", background: "#f5f5f5", padding: "20px" }}>
         <div style={{ width: "100%", maxWidth: "500px", background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
           
           <h1 style={{ textAlign: "center", color: "#007bff", marginBottom: "20px" }}>
             Admin Login
           </h1>   
           <form>
           
             <div className="mb-3">
               <label className="form-label">Admin Email</label>
               <input type="email" className="form-control" name="email"  placeholder="Enter Salon email" onChange={changeHandler}  />
             </div>
             <div className="mb-3">
               <label className="form-label">Password</label>
               <input type="password" className="form-control" name="password" placeholder="Use strong password" onChange={changeHandler}   />
             </div>
   
             <button className="btn btn-primary w-100" onClick={submitHandler}>Submit</button>
           </form>
         </div>
       </div>
    </>
  )
}

export default Login