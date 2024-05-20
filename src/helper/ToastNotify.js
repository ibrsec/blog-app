import { Bounce, Flip, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const toastTypes = {
  success:"success",
  error:"error",
  warn:"warn",
  info:"info",
}




export const toastSuccess = (msg) => {
  toast.success(msg, {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Flip,
  });
};
export const toastError = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Flip,
  });
};
export const toastWarn = (msg) => {
  toast.warn(msg, {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Flip,
  });
};
export const toastInfo = (msg) => {
  toast.info(msg, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};
export const toastLoading = (msg) => {
  return toast.loading("Please wait... " + msg, 
  {
    position: "bottom-right", 
    theme: "dark",
    transition: Slide,
  }
  );
};
export const toastUpdate = (id, msg, type) => {
  toast.update(id, {
    render: msg,
    type: type,
    isLoading: false,
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Flip,
  });
 
};
