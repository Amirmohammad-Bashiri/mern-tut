import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: () => {},
});

export const { reset } = goalsSlice.actions;

export default goalsSlice.reducer;
