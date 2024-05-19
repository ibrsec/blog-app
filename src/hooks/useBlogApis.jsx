// import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { fetchStartBlogs, successBlogs } from "../features/blogSlice";
import { toastLoading, toastTypes, toastUpdate } from "../helper/ToastNotify";

 
const useBlogApis = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {axiosPublic} = useAxios();
    

    const getBlogs = async(page) => {
        
        dispatch(fetchStartBlogs())
        const idLoading = toastLoading("getting datas")
        try {
            const response = await axiosPublic(`/blogs?limit=2&page=${page}`);
            console.log(response.data);
            dispatch(successBlogs(response.data))
            toastUpdate(idLoading,"SuccessFully Loaded",toastTypes.success)
        } catch (error) {
            toastUpdate(idLoading,"Data Loading is Failed",toastTypes.error)
            
        }
    }







  return {getBlogs}
}

export default useBlogApis