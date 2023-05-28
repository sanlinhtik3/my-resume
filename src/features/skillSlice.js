import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [],
  socials: [],
  experiences: [],
};

const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    createSkill: (state, action) => {
      state.skills = action.payload;
    },
    createSocial: (state, action) => {
      state.socials = action.payload;
    },
    createExperience: (state, action) => {
      state.experiences = action.payload;
    },
  },
});
export const {createSkill, createSocial, createExperience} = skillSlice.actions
export default skillSlice.reducer