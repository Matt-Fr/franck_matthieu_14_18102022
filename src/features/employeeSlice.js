import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeesList: [],
  firstNameState: "",
  isLoading: false,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployeeToList: (state, { payload }) => {
      state.employeesList.push(payload);
    },
  },
  extraReducers: {},
});

export const { addEmployeeToList, addName } = employeesSlice.actions;
export default employeesSlice.reducer;
