import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { states } from "../utils/UsStates";

export default function SelectSmall() {
  const [stateInput, setStateInput] = React.useState("");
  console.log(stateInput);
  const handleChange = (event) => {
    setStateInput(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="demo-simple-select-autowidth-label">State</InputLabel>
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
  );
}
