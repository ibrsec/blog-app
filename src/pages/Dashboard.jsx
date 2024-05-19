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



//* logindesin -> tamam
//* login page e formigi uygula sonra submite login bas
//*  loginSlice
//*  sonra regsiter var
//*  registere'a ayri path yapacazmi
//* logine ve loginden navigateler yani privateRouter
//*  private router
// *loginsiz login page yonlenince => notify gosterme.
//* redux persist
// new blog content //*  route private
// read more content, comments, kendi yazisi ise edit delete buttonlari //* route private
//fav content //* route private 
//profile after login route private content
//myblog after login route private content
//profile after login route private content
// * profile card resmi
//about kismi
//logout olunca blog infolar silinecek
//login ken login ve register endpointine gitmeyi engelleme