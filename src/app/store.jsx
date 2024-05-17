import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../features/blogSlice";



export const store = configureStore({
    reducer:{
        blogs:blogSlice
    }
})