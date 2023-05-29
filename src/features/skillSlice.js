import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  educations: [],
  skills: [],
  socials: [],
  experiences: [],
  socialAccounts: [],
  languages: [],
};

const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    createEducation: (state, action) => {
      state.educations = action.payload;
    },
    createSkill: (state, action) => {
      state.skills = action.payload;
    },
    createSocial: (state, action) => {
      state.socials = action.payload;
    },
    createExperience: (state, action) => {
      state.experiences = action.payload;
    },
    createSocialAccount: (state, action) => {
      state.socialAccounts = action.payload;
    },
    createLanguage: (state, action) => {
      state.languages = action.payload;
    },
  },
});
export const { createEducation,createSkill, createSocial, createExperience, createSocialAccount, createLanguage } =
  skillSlice.actions;
export default skillSlice.reducer