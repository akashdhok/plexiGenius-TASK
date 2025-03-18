import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BASE_URL from '../config'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const EditTask = () => {
    let {id} = useParams()
    const[apiData , setApiData] = useState({})
    let navigate = useNavigate()
    const loadData = async()=>{
        let api = `${BASE_URL}/task/editTask`
        let res = await axios.post(api , {id : id})
        setApiData(res.data)
    }
    useEffect(()=>{
        loadData()
    },[])
    const changeInput = (e)=>{
        let{name , value}  =e.target;
        setApiData({
            ...apiData,
            [name] : value
        })
    }
    const SubmitHandler = async(e)=>{
          e.preventDefault()
          let api = `${BASE_URL}/task/update`
          let res = await axios.post(api , apiData)
          alert("updated")
          navigate("/dash/task-management")
    }
  return (
   <>
   <br /><hr /><br />
        <Form style={{width : "50%", margin : "auto"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name='title' value={apiData.title} onChange={changeInput}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name='description' value={apiData.description}  onChange={changeInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Priority</Form.Label>
                <Form.Control type="text" name='priority' value={apiData.priority} onChange={changeInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Deadline</Form.Label>
                <Form.Control type="text" name='deadline' value={apiData.deadline} onChange={changeInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" name='status' value={apiData.status} onChange={changeInput} />
            </Form.Group>
            <Button variant="primary" onClick={SubmitHandler} >
                Submit
            </Button>
        </Form>
   
   </>
  )
}

export default EditTask