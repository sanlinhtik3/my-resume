import { configureStore } from "@reduxjs/toolkit";
import skillReducer from "../features/skillSlice";
import settingReducer from "../features/settingSlice";

const store = configureStore({
    reducer: {
        skills: skillReducer,
        settings: settingReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
})

export default store;