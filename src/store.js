import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "./features/employeeSlice";

export const store = configureStore({ reducer: { employees: employeesSlice } });
