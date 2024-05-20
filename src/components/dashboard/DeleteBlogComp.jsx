import { Box, Button, Typography } from "@mui/material"
import useBlogApis from "../../hooks/useBlogApis"
import { useSelector } from "react-redux";
import { toastInfo } from "../../helper/ToastNotify";

const DeleteBlogComp = ({setOpen}) => {

    const {deleteDatageneric} = useBlogApis();

    const singleBlogInfo = useSelector(state=> state.blogs.singleBlog)

    const handleDeleteOk = () => {
        deleteDatageneric("blogs",singleBlogInfo?._id);
        setOpen(false);
    }
    const handleCancel = ()=> {
        setOpen(false);
        toastInfo("Delete is cancelled!")
    }


  return (
    <Box align={"center"}>
        <Typography mb={3} fontSize={24} fontWeight={"bold"}>Are you sure?</Typography>
        <Typography >Blog will be deleted!</Typography>
        <Typography mb={3} fontSize={14} color={"gray"}>**Warning: This cannot be undone!!!</Typography>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={1}>

        <Button variant="contained" color="secondary" sx={{color:"white",":hover":{backgroundColor:"crimson"},transition:".5s all"}} onClick={handleDeleteOk}  >OK</Button>
        <Button variant="contained" sx={{backgroundColor:"crimson",transition:".5s all"}} onClick={handleCancel}  >Cancel</Button>
        </Box>
    </Box>
  )
}

export default DeleteBlogComp