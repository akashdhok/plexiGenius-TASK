import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BASE_URL from '../config';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AdminDash = () => {
    const [task, setTask] = useState(0);
    const [emp, setEmp] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [pending, setPending] = useState(0);

    const loadData = async () => {
        try {
            let res = await axios.get(`${BASE_URL}/task/totaltask`);
            let res2 = await axios.get(`${BASE_URL}/employee/totalemp`);
            let res3 = await axios.get(`${BASE_URL}/task/status`);
            
            setTask(res.data.count);
            setEmp(res2.data.count);
            setPending(res3.data.pending);
            setCompleted(res3.data.completed);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Welcome, Admin</h1>
            
            <Row className="g-4">
             
                <Col md={6} lg={3}>
                    <Card className="text-center shadow-lg border-0">
                        <Card.Body>
                            <Card.Title className="fw-bold">Total Tasks</Card.Title>
                            <Card.Text className="fs-3 text-primary">{task}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

              
                <Col md={6} lg={3}>
                    <Card className="text-center shadow-lg border-0">
                        <Card.Body>
                            <Card.Title className="fw-bold">Total Employees</Card.Title>
                            <Card.Text className="fs-3 text-success">{emp}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

               
                <Col md={6} lg={3}>
                    <Card className="text-center shadow-lg border-0">
                        <Card.Body>
                            <Card.Title className="fw-bold">Tasks Completed</Card.Title>
                            <Card.Text className="fs-3 text-success">{completed}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

               
                <Col md={6} lg={3}>
                    <Card className="text-center shadow-lg border-0">
                        <Card.Body>
                            <Card.Title className="fw-bold">Tasks Pending</Card.Title>
                            <Card.Text className="fs-3 text-danger">{pending}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminDash;
