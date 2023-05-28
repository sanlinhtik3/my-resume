import { configureStore } from "@reduxjs/toolkit";
import skillReducer from "../features/skillSlice";

const store = configureStore({
    reducer: {
        skills: skillReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
})

export default store;