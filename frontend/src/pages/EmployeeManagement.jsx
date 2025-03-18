import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeManagement = () => {
    const[empData , setEmpData] = useState({})
    const navigate = useNavigate()
    const changeInput = (e)=>{
        let{name , value} = e.target;
        setEmpData({
            ...empData,
            [name] : value
        })
    }
const SubmitHandler = async(e)=>{
    e.preventDefault()
    try {
        let api = `${BASE_URL}/employee/registration`
        let res = await axios.post(api , empData)
        console.log(res.data)
        alert("Data inserted")
        navigate("/dash/display")
    } catch (error) {
        
    }
}
  return (
    <>
     <Form style={{width : "50%" , margin : "auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" name='name' onChange={changeInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' onChange={changeInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Phone</Form.Label>
        <Form.Control type="text" name='phone' onChange={changeInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Department</Form.Label>
        <Form.Control type="text" name='dept' onChange={changeInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Status</Form.Label>
        <Form.Control type="text" name='status' onChange={changeInput}  />
      </Form.Group>

      <Button variant="primary" onClick={SubmitHandler} >
        Submit
      </Button>
    </Form>
    
    </>
  )
}

export default EmployeeManagement