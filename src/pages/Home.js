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
import { Modal } from "matt-fr-react-modal";

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
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployeeToList(newEmployee));
    setOpenModal(!openModal);
    resetInput();
  };

  const resetInput = () => {
    setFirstName("");
    setLastName("");
    setBirthDate(null);
    setStartDate(null);
    setStateInput("");
    setStreet("");
    setCity("");
    setzipCode("");
    setDepartment("");
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
    <main className="main">
      <h1 className="title">HRnet</h1>
      <Link to="/employees" className="linkTable">
        View Current Employees
      </Link>
      <div className="containerHome">
        <h2>Create Employee</h2>
        <form
          action="#"
          className="formHome"
          id="create-employee"
          onSubmit={handleSubmit}
        >
          <div className="containerNames">
            <TextField
              sx={{
                width: 230,
              }}
              className="input"
              value={firstName}
              label="First Name"
              variant="outlined"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <TextField
              sx={{
                width: 230,
              }}
              value={lastName}
              className="input"
              label="Last Name"
              variant="outlined"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="containerDates">
            <LocalizationProvider className="input" dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={birthDate}
                onChange={(newValue) => {
                  setBirthDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} required />}
              />
            </LocalizationProvider>

            <LocalizationProvider className="input" dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} required />}
              />
            </LocalizationProvider>
          </div>
          <div className="address">
            <h2>Address</h2>
            <TextField
              sx={{
                width: 200,
                margin: 1,
              }}
              className="input"
              value={street}
              label="Street"
              variant="outlined"
              onChange={(e) => setStreet(e.target.value)}
            />
            <TextField
              sx={{
                width: 200,
                margin: 1,
              }}
              className="input"
              value={city}
              label="City"
              variant="outlined"
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              sx={{
                width: 200,
                margin: 1,
              }}
              className="input"
              value={zipCode}
              label="Zip Code"
              variant="outlined"
              onChange={(e) => setzipCode(e.target.value)}
            />
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel>State</InputLabel>
              <Select
                labelId="demo-select-small"
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
          </div>

          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel>Department</InputLabel>
            <Select
              labelId="demo-select-small"
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
          <Button
            sx={{
              width: 100,
              margin: 1,
            }}
            type="submit"
            variant="contained"
          >
            Save
          </Button>
        </form>
      </div>
      {openModal && (
        <Modal
          message="Employee Created"
          openModal
          setOpenModal={setOpenModal}
        ></Modal>
      )}
    </main>
  );
};

export default Home;
