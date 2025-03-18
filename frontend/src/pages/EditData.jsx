import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BASE_URL from '../config'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const EditData = () => {
    let {id} = useParams()
    const[empData , setEmpData] = useState({})
  const navigate = useNavigate()
    const loadData = async()=>{
        let api = `${BASE_URL}/employee/editdata`
        let res = await axios.post(api , {id : id})
        setEmpData(res.data)
    }
    useEffect(()=>{
        loadData()
    } , [])
    const changeInput = (e)=>{
        let{name , value} = e.target;
        setEmpData({
            ...empData,
            [name] : value
        })
        
    }
    const SubmitHandler = async(e)=>{
     e.preventDefault()
     let api= `${BASE_URL}/employee/updatedata`
     let res = await axios.post(api , empData)
     alert("updated")
     navigate("/dash/display")
    }
  return (
    <>
    <Form style={{width : "50%" , margin : "auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" name='name' value={empData.name} onChange={changeInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={empData.email} onChange={changeInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Phone</Form.Label>
        <Form.Control type="text" name='phone' value={empData.phone} onChange={changeInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Department</Form.Label>
        <Form.Control type="text" name='dept' value={empData.dept} onChange={changeInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Status</Form.Label>
        <Form.Control type="text" name='status' value={empData.status} onChange={changeInput}  />
      </Form.Group>

      <Button variant="primary" onClick={SubmitHandler} >
        Submit
      </Button>
    </Form>
    </>
  )
}

export default EditData