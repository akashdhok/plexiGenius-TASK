import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BASE_URL from '../config';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AssignTask = () => {
    const [data , setData] = useState([])
    const[input , setInput] = useState({})
    const loadData = async()=>{
        let api = `${BASE_URL}/employee/getname`;
        let res = await axios.get(api)
        setData(res.data)
    }
    
    useEffect(()=>{
        loadData()
    },[])
    const changeInput = (e)=>{
        let{name , value} = e.target;
        setInput({
            ...input,
            [name] : value
        })
    }
    const SubmitHandler = async(e)=>{
        e.preventDefault()
        try {
            let api = `${BASE_URL}/task/givetask`
            let res = await axios.post(api , input)
            console.log(res.data)
            alert("Task Assigned")
         
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <><br /><hr /><br />
        <Form style={{width : "50%", margin : "auto"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name='title' onChange={changeInput}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name='description' onChange={changeInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Assigned Employee</Form.Label>
                <Form.Select name ="employee" onChange={changeInput}>
                    <option value="" >Select Employee</option>
                    {data.map((employee, index) => (
                        <option key={index}  value={employee.name} name ="employee"    >{employee.name}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Priority</Form.Label>
                <Form.Control type="text" name='priority' onChange={changeInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Deadline</Form.Label>
                <Form.Control type="text" name='deadline' onChange={changeInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" name='status' onChange={changeInput} />
            </Form.Group>
            <Button variant="primary" onClick={SubmitHandler} >
                Submit
            </Button>
        </Form>
        </>
    )
}

export default AssignTask;
