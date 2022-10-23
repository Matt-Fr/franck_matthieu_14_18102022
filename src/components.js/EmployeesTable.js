import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

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

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={employeesList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
