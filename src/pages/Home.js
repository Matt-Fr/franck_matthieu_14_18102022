import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SelectSmall from "../components.js/Select";
import { addEmployeeToList } from "../features/employeeSlice";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { makeStyles } from "@material-ui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { states } from "../utils/UsStates";

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployeeToList(newEmployee));
  };
  const [stateInput, setStateInput] = React.useState("");
  console.log(stateInput);
  const handleChange = (event) => {
    setStateInput(event.target.value);
  };

  const newEmployee = {
    firstName,
    lastName,
    stateInput,
  };

  console.log(newEmployee);

  return (
    <main>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" onSubmit={handleSubmit}>
          {/* <label htmlFor="first-name">First Name</label> */}
          {/* <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required="required"
          /> */}

          <TextField
            required="required"
            value={firstName}
            id="outlined-required"
            label="First Name"
            variant="outlined"
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* <label htmlFor="last-name">Last Name</label> */}
          {/* <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          /> */}

          <TextField
            required="required"
            value={lastName}
            id="outlined-required"
            label="First Name"
            variant="outlined"
            onChange={(e) => setLastName(e.target.value)}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Basic example"
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>

            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                State
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={stateInput}
                label="State"
                onChange={handleChange}
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

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <button>Save</button>
        </form>
      </div>
    </main>
  );
};

export default Home;
