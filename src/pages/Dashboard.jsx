import { useEffect, useState } from "react";
import useBlogApis from "../hooks/useBlogApis";
import { useSelector } from "react-redux";
import PaginationComp from "../components/dashboard/PaginationComp";
import Blogs from "../components/dashboard/Blogs";
import { Box } from "@mui/material";

const Dashboard = () => {
  const { getBlogs } = useBlogApis();
  
  

  const [page, setPage] = useState(1);
  
  useEffect(() => {
    getBlogs(page);
  }, [page]);


  return <Box sx={{minHeight:"calc(100vh - 180px)"}} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-between"}>

    <Blogs />

<PaginationComp page={page} setPage={setPage}/>


  </Box>;
};

export default Dashboard;
