import { Box } from '@mui/material'
import { Pagination } from "@mui/material";
import { useState } from 'react';
import { useSelector } from 'react-redux';


const PaginationComp = ({page, setPage}) => {

    const blogs = useSelector((state)=> state?.blogs?.blogs)
    const blogsDetails = blogs?.details;

    const totalPage = Number(Math.ceil(blogsDetails?.totalRecords / blogsDetails?.limit));
     
  const handleChange = (event, value) => {
    setPage(value);
  }; 


  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} py={4}>
        <Pagination count={totalPage} color="primary" page={page} onChange={handleChange}  />
    </Box>
        
  )
}

export default PaginationComp