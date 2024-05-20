import { createSlice } from "@reduxjs/toolkit"


const initialState={
    blogs:[], 
    singleBlog:{},
    singleLikeResult:{},
    categories:[],
    comments:[],
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
        successDatasGeneric: (state,{payload}) => {
            state.loading = false; 
            state[payload.path] = payload.data;
        },
        successSingleBlog:(state,{payload})=>{
            state.loading = false;
            state.singleBlog = payload;
        },
        successSingleLike:(state,{payload})=>{
            state.loading = false;
            state.singleLikeResult = payload;
        },
        
        successWithoutPayload:state=>{
            state.loading =false;
        },
        logoutBlogsReducer:state=>{
            // state.blogs=[];
            state.categories=[];
            state.comments=[];
        }
    }
})
export const {fetchStartBlogs,fetchFailBlogs,successDatasGeneric,successWithoutPayload,successSingleBlog, successSingleLike } = blogSlice.actions;
export default  blogSlice.reducer;
