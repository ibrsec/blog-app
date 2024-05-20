// import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import {
  fetchStartBlogs,
  successDatasGeneric,
  successWithoutPayload,
  successSingleBlog,
  successSingleLike,
} from "../features/blogSlice";
import { toastLoading, toastTypes, toastUpdate } from "../helper/ToastNotify";

const useBlogApis = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { axiosPublic, axiosToken } = useAxios();

  const getDatasgeneric = async (path, limit, page) => {
    dispatch(fetchStartBlogs());
    const idLoading = toastLoading("Getting datas");
    try {
      const response = await axiosPublic(
        `/${path}?limit=${limit}&page=${page}`
      );
      console.log(`Get datas ${path}`, response);
      const data = response?.data;
      dispatch(successDatasGeneric({ path, data }));
      toastUpdate(
        idLoading,
        path + " - SuccessFully Loaded",
        toastTypes.success
      );
    } catch (error) {
      toastUpdate(
        idLoading,
        path + " Data Loading is Failed",
        toastTypes.error
      );
    }
  };
  const getUsersBlogs = async (userId) => {
    dispatch(fetchStartBlogs());
    const idLoading = toastLoading("Getting user's blogs");
    try {
      const response = await axiosToken(`/blogs?author=${userId}`);
      console.log(`Get users blogs =`, response);
      const data = response?.data;
      dispatch(successDatasGeneric({ path: "blogs", data }));
      toastUpdate(
        idLoading,
        "User's blogs - SuccessFully Loaded",
        toastTypes.success
      );
    } catch (error) {
      toastUpdate(
        idLoading,
        "User's blogs Data Loading is Failed",
        toastTypes.error
      );
    }
  };

  const getSingleBlogInfo = async (blogId) => {
    dispatch(fetchStartBlogs());
    const idLoading = toastLoading("Getting blog info");
    try {
      const response = await axiosToken(`/blogs/${blogId}`);
      console.log(`Get single blog info =`, response);
      const data = response?.data?.data;
      dispatch(successSingleBlog(data));
      toastUpdate(
        idLoading,
        "Single blog info - SuccessFully Loaded",
        toastTypes.success
      );
    } catch (error) {
      toastUpdate(
        idLoading,
        "Single blog info Loading is Failed",
        toastTypes.error
      );
    }
  };

  const postNewDatageneric = async (path, body) => {
    dispatch(fetchStartBlogs());
    const idLoading = toastLoading("Posting new Data");
    try {
      const response = await axiosToken.post(`/${path}`, body);
      console.log(`Post new data - ${path}`, response);
      dispatch(successWithoutPayload());
      toastUpdate(
        idLoading,
        path + " - SuccessFully posted",
        toastTypes.success
      );

      path === "comments" && getSingleBlogInfo(body?.blogId);
    } catch (error) {
      toastUpdate(idLoading, path + " Post is Failed", toastTypes.error);
      console.log(error);
    }
  };

  const deleteDatageneric = async (path, id) => {
    dispatch(fetchStartBlogs());
    const idLoading = toastLoading("Deleting Data");
    try {
      //https://30154.fullstack.clarusway.com/blogs/:id
      const response = await axiosToken.delete(`/${path}/${id}`);
      console.log(`Delete data - ${path}`, response);
      dispatch(successWithoutPayload());
      toastUpdate(
        idLoading,
        path + " - SuccessFully deleted",
        toastTypes.success
      );

      if (path === "blogs") {
        navigate("/");
      } else if (path === "comments") {
        navigate(0);
      }
    } catch (error) {
      toastUpdate(idLoading, path + " Delete is Failed", toastTypes.error);
      console.log(error);
    }
  };

  const editBlogApi = async (id, body) => {
    dispatch(fetchStartBlogs());
    const idLoading = toastLoading("Editting Blog");
    try {
      const response = await axiosToken.put(`/blogs/${id}`, body);
      console.log(`Edit blogs - `, response);
      dispatch(successWithoutPayload());
      toastUpdate(
        idLoading,
        " - SuccessFully Edited - blog",
        toastTypes.success
      );

      getSingleBlogInfo(id);
    } catch (error) {
      toastUpdate(idLoading, " Edit blog is Failed", toastTypes.error);
      console.log(error);
    }
  };
  const postLikeApi = async (id) => {
    //https://30154.fullstack.clarusway.com/blogs/:id/postLike
    dispatch(fetchStartBlogs());
    const idLoading = toastLoading("Liking Blog..");
    try {
      const response = await axiosToken.post(`/blogs/${id}/postLike`);
      console.log(`Like blog - `, response);
      dispatch(successSingleLike({id:id,data:response?.data}));
      toastUpdate(idLoading, " - SuccessFully liked", toastTypes.success);

     
    } catch (error) {
      toastUpdate(idLoading, " Like blog is Failed", toastTypes.error);
      console.log(error);
    }
  };

  return {
    getDatasgeneric,
    postNewDatageneric,
    getUsersBlogs,
    getSingleBlogInfo,
    deleteDatageneric,
    editBlogApi,
    postLikeApi,

  };
};

export default useBlogApis;
