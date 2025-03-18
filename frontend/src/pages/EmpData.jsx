import React, { useEffect, useState } from 'react';
import BASE_URL from '../config';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EmpData = () => {
    const [apiData, setApiData] = useState([]);
    let navigate = useNavigate();

    const loadData = async () => {
        let api = `${BASE_URL}/employee/displayData`;
        let res = await axios.get(api);
        setApiData(res.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const addEmp = () => {
        navigate('/dash/management');
    };
    
    const searchEmp = () => {
        navigate('/dash/search');
    };

    const deleteData = async (id) => {
        let api = `${BASE_URL}/employee/deleteData`;
        await axios.post(api, { id });
        alert('Data Deleted');
        loadData();
    };

    const editData = (id) => {
        navigate(`/dash/editdata/${id}`);
    };

    return (
        <Container className='mt-4'>
            <Row className='mb-3 text-center'>
                <Col xs={12} md={6} className='mb-2'>
                    <Button variant='primary' onClick={addEmp} className='w-100'>Add Employee</Button>
                </Col>
                <Col xs={12} md={6} className='mb-2'>
                    <Button variant='primary' onClick={searchEmp} className='w-100'>Search Employee</Button>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col xs={12}>
                    <Table striped bordered hover responsive className='text-center'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Employee Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Department</th>
                                <th>Status</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apiData.map((e, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.phone}</td>
                                    <td>{e.dept}</td>
                                    <td>{e.status}</td>
                                    <td>
                                        <MdDelete
                                            onClick={() => deleteData(e._id)}
                                            style={{ fontSize: '20px', cursor: 'pointer', color: 'red' }}
                                        />
                                    </td>
                                    <td>
                                        <FaEdit
                                            onClick={() => editData(e._id)}
                                            style={{ fontSize: '20px', cursor: 'pointer', color: 'blue' }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default EmpData;
