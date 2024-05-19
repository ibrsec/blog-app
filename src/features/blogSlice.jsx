import { createSlice } from "@reduxjs/toolkit"


const initialState={
    blogs:[],
    blogsDetails:{},
    loading:false,
    error:false,
}


const blogSlice = createSlice({
    name:"blogs",
    initialState,
    reducers:{
        fetchStartBlogs: state=> {
            state.loading = true;
            state.error = false;
        },
        fetchFailBlogs : state=> {
            state.loading = false;
            state.error = true;
        },
        successBlogs: (state,{payload}) => {
            state.loading = false;
            console.log('payload =',payload?.details);
            state.blogs = payload.data;
            state.blogsDetails = payload?.details;
        }
    }
})
export const {fetchStartBlogs,fetchFailBlogs,successBlogs} = blogSlice.actions;
export default  blogSlice.reducer;
