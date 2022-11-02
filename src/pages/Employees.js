import React from "react";
import { Link } from "react-router-dom";
import DataTable from "../components.js/EmployeesTable";

const Employees = () => {
  return (
    <main className="pageEmployee">
      <div id="employee-div" className="containerEmployee">
        <h1 className="titleEmployeePage">Current Employees</h1>
        <DataTable></DataTable>
      </div>
      <Link to="/" className="linkTable btnHome">
        Home
      </Link>
    </main>
  );
};

export default Employees;
