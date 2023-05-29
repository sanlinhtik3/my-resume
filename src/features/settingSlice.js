import { createSlice } from "@reduxjs/toolkit";

const getSettings = JSON.parse(localStorage.getItem("settings"));

const initialState = {
  preference: getSettings ? getSettings : {},
};

const skillSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSetting: (state, action) => {
      state.preference = action.payload;
    },
    
  },
});
export const { setSetting } = skillSlice.actions;
export default skillSlice.reducer;
