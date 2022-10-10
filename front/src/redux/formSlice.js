import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    feedback: "",
  },
  reducers: {
    inputName: (state, action) => {
      state.name = action.payload;
    },
    inputEmail: (state, action) => {
      state.email = action.payload;
    },
    inputFeedback: (state, action) => {
      state.feedback = action.payload;
    },
  },
});

export const reducer = formSlice.reducer;
export const { inputName, inputEmail, inputFeedback } = formSlice.actions;
