import { configureStore } from "@reduxjs/toolkit";

import Projects from "../Feature/Projects";
import  resourceSlice  from "../Feature/Resource";
import  whatSlice  from "../Feature/WhatWeDo"; 
import  teamSlice  from "../Feature/Team";
export const store = configureStore({
    reducer:{
       project:Projects , 
       resource:resourceSlice , 
       what:whatSlice , 
       team : teamSlice
    }
})