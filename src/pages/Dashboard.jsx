import { useEffect, useState } from "react";
import useBlogApis from "../hooks/useBlogApis";
import { useSelector } from "react-redux";
import PaginationComp from "../components/dashboard/PaginationComp";
import Blogs from "../components/dashboard/Blogs";
import { Box } from "@mui/material";

const Dashboard = () => {
  const { getDatasgeneric } = useBlogApis();
  
  

  const [page, setPage] = useState(1);
  
  useEffect(() => {
    getDatasgeneric("blogs",10,page);
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
//* new blog content //*  route private



//? read more content, 
//*comments, in prgres
//*kendi yazisi ise edit delete buttonlari //* route private
//* readmore da update e mdoal acilacak
//* edit update ok
//* delete 'e de eminmisin modali acilacak tabi.'
//* delete ok
//* knedi yazisi ise commentleri silebilirmi 

//* detailste category gosterilecek
//* publish mi draftmi detailde gozukecek
//* kendinin blogu ise it's you yazacak


//*fav content //* route private 
//* profile  content //*after login route private 
//*my blog da blog yoksa write blog yazisi ve newbloga navigate
//*mayblogda drafts lar ustte yari olarak gosterilsin


//*myblog after login route private content 
//*profile after login route private content
// * profile card resmi
//* about kismi
//*logout olunca comments categories infolar silinecek, blogs loginsiz geliyor zaten silme
//* login ken login ve register endpointine gitmeyi engelleme

// * dashboardda ki bloglar isPublesh true ise gozukecek  - zaten boyleymis
// * false olanlar sadece myblogda gozukmeli

//*logo ya tiklayinca bisey acilsin biyere gitsin vs


 
 