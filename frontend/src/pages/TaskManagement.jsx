import React, { useEffect, useState } from "react";
import BASE_URL from "../config";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const TaskManagement = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate()
  const loadData = async () => {
    let api = `${BASE_URL}/task/displayTask`;
    let res = await axios.get(api);
    setApiData(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

const deleteData = async(id)=>{
    const api = `${BASE_URL}/task/deleteTask`
    let res = await axios.post(api , {id : id})
    alert("Task Deleted ")
    loadData()
}
const editData  =(id)=>{
navigate(`/dash/edittask/${id}`)
}

  return (
    <>
      <hr />
      <Container>
        <Row>
          <Col xs={12}>
            <Table striped bordered hover responsive className="text-center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Employee</th>
                  <th>Priority</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((e, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{e.title}</td>
                    <td>{e.description}</td>
                    <td>{e.employee}</td>
                    <td>{e.priority}</td>
                    <td>{e.deadline}</td>
                    <td>{e.status}</td>
                    <td>
                      <MdDelete
                        onClick={() => deleteData(e._id)}
                        style={{
                          fontSize: "20px",
                          cursor: "pointer",
                          color: "red",
                        }}
                      />
                    </td>
                    <td>
                      <FaEdit
                        onClick={() => editData(e._id)}
                        style={{
                          fontSize: "20px",
                          cursor: "pointer",
                          color: "blue",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TaskManagement;
