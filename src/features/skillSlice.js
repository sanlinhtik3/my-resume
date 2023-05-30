import { createSlice } from "@reduxjs/toolkit";

const info = JSON.parse(localStorage.getItem("info"));
const def = {
  name: "San Lin Htike",
  career: "Web Developer",
  phone: "09 969 474 745",
  email: "san Lin Htike",
  behance: "sanlinhtike",
  welcome: "Hello",
  aboutme:
    "Highly skilled and motivated Frontend Web Developer and Web UI/UX Designer with extensive experience in modern web development, proficient in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js. Adept at creating clean and beautiful UI/UX designs. Seeking challenging opportunities to utilize my skills and contribute to innovative web development projects. Currently, I am teaching at inficreax as a Frontend Web Developer. I have got 3+ years experience in web development field. ",
};

const initialState = {
  info : info === {} ? info : def,
  educations: [],
  skills: [],
  socials: [],
  experiences: [],
  socialAccounts: [],
  languages: [],
  projectLinks: [],
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
    createProjectLink: (state, action) => {
      state.projectLinks = action.payload;
    },
  },
});
export const {
  createEducation,
  createSkill,
  createSocial,
  createExperience,
  createSocialAccount,
  createLanguage,
  createProjectLink,
} = skillSlice.actions;
export default skillSlice.reducer