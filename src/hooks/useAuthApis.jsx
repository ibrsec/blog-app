import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";
import {
  fetchFailAuth,
  fetchStartAuth,
  logoutSuccess,
  succcessLoginAuth,
  succcessRegisterAuth,
} from "../features/authSlice.";
import { toastLoading, toastTypes, toastUpdate } from "../helper/ToastNotify";

const useAuthApis = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { axiosPublic } = useAxios();

  const loginApi = async (body) => {
    dispatch(fetchStartAuth());
    const idLoading = toastLoading("Loggin in..");
    try {
      const response = await axiosPublic.post("/auth/login", body);
      console.log(`login response = `, response);
      //success action
      dispatch(succcessLoginAuth(response?.data));
      //navigate previous page
      navigate(-1);
      //show result
      toastUpdate(idLoading, "SuccessFully Logged in", toastTypes.success);
    } catch (error) {
      //fail action
      dispatch(fetchFailAuth());
      //show result
      console.log(error);
      toastUpdate(idLoading, "Login is Failed", toastTypes.error);
    }
  };
  const registerApi = async (body) => {
    dispatch(fetchStartAuth());
    const idLoading = toastLoading("Registering..");
    try {
      const response = await axiosPublic.post("/users", body);
      console.log(`register response = `, response);
      //success action
      dispatch(succcessRegisterAuth(response?.data));
      //navigate previous page
      navigate("/");
      //show result
      toastUpdate(idLoading, "SuccessFully Registered", toastTypes.success);
    } catch (error) {
      //fail action
      dispatch(fetchFailAuth());
      //show result
      console.log(error);
      toastUpdate(idLoading, "Regsiter is Failed", toastTypes.error);
    }
  };
  const logoutApi = async () => {
    dispatch(fetchStartAuth());
    const idLoading = toastLoading("Logging out..");
    try {
      const response = await axiosPublic.get("/auth/logout");
      console.log(response);
      //success action
      dispatch(logoutSuccess());
      //navigate previous page
      navigate("/");
      //show result
      toastUpdate(idLoading, "SuccessFully Logged out", toastTypes.success);
    } catch (error) {
      //fail action
      dispatch(fetchFailAuth());
      //show result
      console.log(error);
      toastUpdate(idLoading, "Logout is Failed", toastTypes.error);
    }
  };

  return { loginApi, registerApi, logoutApi };
};

export default useAuthApis;
