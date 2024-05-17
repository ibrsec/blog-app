// import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { fetchStartBlogs, successBlogs } from "../features/blogSlice";

 
const useBlogApis = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {axiosPublic} = useAxios();

    const getBlogs = async(page) => {
        
        dispatch(fetchStartBlogs())
        try {
            const response = await axiosPublic(`/blogs?limit=2&page=${page}`);
            console.log(response.data);
            dispatch(successBlogs(response.data))
        } catch (error) {
            
        }
    }






  return {getBlogs}
}

export default useBlogApis