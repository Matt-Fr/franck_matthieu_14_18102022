import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const { logoutUser, toggleNameForm } = employeesSlice.actions;
export default employeesSlice.reducer;
