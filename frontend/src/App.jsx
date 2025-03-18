import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dash from "./Dash";
import EmployeeManagement from "./pages/EmployeeManagement";
import EmpData from "./pages/EmpData";
import EditData from "./pages/EditData";
import Search from "./pages/Search";
import AssignTask from "./pages/AssignTask";
import TaskManagement from "./pages/TaskManagement";
import EditTask from "./pages/EditTask";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
      <Routes>
        <Route path="dash" element={<Dash />}>
          <Route path="management" element={<EmployeeManagement />} />
          <Route path="display" element={<EmpData/>} />
          <Route path="editdata/:id" element = {<EditData/>}/>
          <Route path="search" element = {<Search/>}/>
          <Route path="assign-tasks" element = {<AssignTask/>}/>
          <Route path="task-management" element = {<TaskManagement/>}/>
          <Route path="edittask/:id" element = {<EditTask/>}/>
         </Route>
      </Routes>
    </>
  );
};

export default App;
