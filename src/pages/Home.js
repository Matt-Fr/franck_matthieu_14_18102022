import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addEmployeeToList } from "../features/employeeSlice";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { states } from "../utils/UsStates";
import { departments } from "../utils/departments";
import Button from "@mui/material/Button";

const Home = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [stateInput, setStateInput] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployeeToList(newEmployee));
  };

  let id = 1;
  const employees = useSelector((state) => state?.employees.employeesList);
  if (employees.length) {
    id = Math.max(...employees.map((employee) => employee.id)) + 1;
  }

  const newEmployee = {
    id,
    firstName,
    lastName,
    birthDate,
    startDate,
    street,
    city,
    zipCode,
    stateInput,
    department,
  };

  return (
    <main>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" onSubmit={handleSubmit}>
          <TextField
            value={firstName}
            id="outlined-required"
            label="First Name"
            variant="outlined"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextField
            value={lastName}
            id="outlined-required"
            label="Last Name"
            variant="outlined"
            onChange={(e) => setLastName(e.target.value)}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth"
              value={birthDate}
              onChange={(newValue) => {
                setBirthDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <fieldset className="address">
            <legend>Address</legend>
            <TextField
              value={street}
              id="outlined-required"
              label="Street"
              variant="outlined"
              onChange={(e) => setStreet(e.target.value)}
            />
            <TextField
              value={city}
              id="outlined-required"
              label="City"
              variant="outlined"
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              value={zipCode}
              id="outlined-required"
              label="Zip Code"
              variant="outlined"
              onChange={(e) => setzipCode(e.target.value)}
            />
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                State
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={stateInput}
                label="State"
                onChange={(e) => setStateInput(e.target.value)}
              >
                {states.map((state) => {
                  return (
                    <MenuItem key={state.abbreviation} value={state.name}>
                      {state.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </fieldset>

          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Department
            </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={department}
              label="State"
              onChange={(e) => setDepartment(e.target.value)}
            >
              {departments.map((department) => {
                return (
                  <MenuItem key={department.name} value={department.name}>
                    {department.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Home;
