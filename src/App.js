import React, { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data.json";
import Table from "./components/Table";
import AddNewWorker from "./components/AddNewWorker";
import Searchbars from "./components/Searchbars";
import SummarySalary from "./components/SummarySalary";
import "./App.css";

function App() {
  const [workers, setWorkers] = useState(data);
  const [editWorkerId, setEditWorkerId] = useState(null);
  const [queryPerson, setQueryPerson] = useState("");
  const [salary, setSalary] = useState(9000);
  const [departmentSalary, setDepartmentSalary] = useState("");
  const [queryDepartment, setQueryDepartment] = useState("");

  const workersSal = workers.map((el) => el.salary);
  const highestSal = Math.max(...workersSal);

  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    salary: "",
  });
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    salary: "",
  });

  const SalarySummary = (e) => {
    return workers
      .filter((user) => user.department.includes(departmentSalary))
      .map((item) => Math.round(item.salary))
      .reduce((prev, next) => prev + next);
  };

  const handleInput = (e) => {
    setSalary(e.target.value);
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newWorker = {
      id: nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      department: addFormData.department,
      salary: parseInt(addFormData.salary),
    };

    const newWorkers = [...workers, newWorker];
    setWorkers(newWorkers);

    console.log(workers);

    setAddFormData({
      firstName: "",
      lastName: "",
      department: "",
      salary: "",
    });
  };

  const handleEditClick = (event, worker) => {
    event.preventDefault();
    setEditWorkerId(worker.id);

    const formValues = {
      firstName: worker.firstName,
      lastName: worker.lastName,
      department: worker.department,
      salary: worker.salary,
    };

    setEditFormData(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedWorker = {
      id: editWorkerId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      department: editFormData.department,
      salary: parseInt(editFormData.salary),
    };

    const newWorkers = [...workers];

    const index = workers.findIndex((worker) => worker.id === editWorkerId);

    newWorkers[index] = editedWorker;

    setWorkers(newWorkers);
    setEditWorkerId(null);
  };

  const handleCancelClick = () => {
    setEditWorkerId(null);
  };

  const handleDeleteClick = (workerId) => {
    const newWorkers = [...workers];

    const index = workers.findIndex((worker) => worker.id === workerId);

    newWorkers.splice(index, 1);

    setWorkers(newWorkers);
  };

  const workersDep = workers.map((el) => el.department);
  const singleDepartments = [...new Set(workersDep)];

  return (
    <div className="container">
      <h1>WORKERS LIST</h1>

      <AddNewWorker
        handleAddFormChange={handleAddFormChange}
        addFormData={addFormData}
        handleAddFormSubmit={handleAddFormSubmit}
      />

      <Searchbars
        setQueryPerson={setQueryPerson}
        setQueryDepartment={setQueryDepartment}
        singleDepartments={singleDepartments}
        highestSal={highestSal}
        handleInput={handleInput}
        salary={salary}
      />

      <Table
        handleEditFormSubmit={handleEditFormSubmit}
        workers={workers}
        queryPerson={queryPerson}
        queryDepartment={queryDepartment}
        salary={salary}
        editWorkerId={editWorkerId}
        handleEditFormChange={handleEditFormChange}
        handleCancelClick={handleCancelClick}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        editFormData={editFormData}
      />

      <SummarySalary
        setDepartmentSalary={setDepartmentSalary}
        singleDepartments={singleDepartments}
        SalarySummary={SalarySummary}
      />
    </div>
  );
}

export default App;
