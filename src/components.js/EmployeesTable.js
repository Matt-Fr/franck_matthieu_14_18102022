import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";

const columns = [
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "startDate", headerName: "Start Date", width: 130 },
  { field: "department", headerName: "Department", width: 130 },
  { field: "birthDate", headerName: "Date of Birth", width: 130 },
  { field: "city", headerName: "City", width: 130 },
  { field: "stateInput", headerName: "State", width: 130 },
  { field: "zipCode", headerName: "Zip Code", width: 130 },
];

export default function DataTable() {
  const { employeesList } = useSelector((store) => store.employees);
  const [search, setSearch] = React.useState("");
  console.log(employeesList);
  const handleSearchChange = () => {
    if (!search) {
      return employeesList;
    } else if (search) {
      const filteredEmployees = employeesList.filter(
        (employee) =>
          employee.firstName
            .toString()
            .toLowerCase()
            .includes(search.toString().toLowerCase()) ||
          employee.lastName
            .toString()
            .toLowerCase()
            .includes(search.toString().toLowerCase()) ||
          employee.department
            .toString()
            .toLowerCase()
            .includes(search.toString().toLowerCase()) ||
          employee.city
            .toString()
            .toLowerCase()
            .includes(search.toString().toLowerCase()) ||
          employee.stateInput
            .toString()
            .toLowerCase()
            .includes(search.toString().toLowerCase()) ||
          employee.zipCode
            .toString()
            .toLowerCase()
            .includes(search.toString().toLowerCase())
      );
      return filteredEmployees;
    }
  };
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={handleSearchChange()}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      <TextField
        value={search}
        id="outlined-required"
        label="Search"
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}
