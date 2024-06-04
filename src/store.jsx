import { configureStore } from "@reduxjs/toolkit";
import  ttoggleSliceReducer  from "./features/toggleSlice";
import whatWeDoSliceReducer from "./features/whatWeDoSlice";
import teamReducer from "./features/teamFeature";
import projectReducer from "./features/projectSlice";
export const store = configureStore({
    reducer:{
        menu:ttoggleSliceReducer , 
        dos:whatWeDoSliceReducer,
        team:teamReducer,
        project:projectReducer
    }
})