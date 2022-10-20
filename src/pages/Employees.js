import React from "react";
import { Link } from "react-router-dom";

const Employees = () => {
  return (
    <main>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>

        <Link to="/">Home</Link>
      </div>
    </main>
  );
};

export default Employees;
