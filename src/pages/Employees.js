import React from "react";
import { Link } from "react-router-dom";
import EnhancedTableHead from "../components.js/EmployeesTable";

const Employees = () => {
  return (
    <main>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <EnhancedTableHead></EnhancedTableHead>
        <Link to="/">Home</Link>
      </div>
    </main>
  );
};

export default Employees;
