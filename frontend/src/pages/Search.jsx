import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import Table from 'react-bootstrap/Table';
const Search = () => {
const [val , setVal] = useState("")
const[searchData , setSearchData] = useState([])
const SubmitHandler = async()=>{
    let api = `${BASE_URL}/employee/search`
    const res = await axios.post(api , {name : val})
    setSearchData(res.data)
}
  return (
    <>
    <br />
    <hr />
    <br />
    <h1 align = "center">Search Employee By Name</h1>
     <Form style={{width : "50%" , margin : "auto"}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control type="text" name='name' value={val} onChange={(e)=>setVal(e.target.value)}  />
          </Form.Group>
           <Button variant="primary" onClick={SubmitHandler} >
                  Search
                </Button>
          </Form>

          <br />
          <hr />
          <Table striped bordered hover style={{width : "50%" , margin : "auto"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Employee Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Department</th>
          <th>Status</th>

        </tr>
      </thead>
      <tbody>
        {
            searchData.map((e , index)=>{
                return <tr key={index}>
                    <td>{index+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>{e.dept}</td>
                    <td>{e.status}</td>
                </tr>
            })
        }
      </tbody>
      </Table>
      <br /><br />
    </>
  )
}

export default Search