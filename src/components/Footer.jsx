 
 
import Box from "@mui/material/Box";
import Container from "@mui/material/Container"; 
import Typography from "@mui/material/Typography";  
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack"; 


import React from 'react'

const Footer = () => {
  return (
    <Box sx={{backgroundColor:"primary.main", py:2}}>
        <Container maxWidth="md" sx={{}} >
            <Stack display="flex" flexDirection="column" alignItems={"center"} justifyContent={"center"} spacing={1} >

            <Typography variant='p' color={"white"} sx={{fontSize:".8rem"}}>Developed by <Link href="https://github.com/ibrsec" target="_blank" sx={{color:"white",textDecoration:"underline",transition:".5s all",":hover":{textDecoration:"none",color:"lime"}}}>ibrsec</Link></Typography>
            <Typography variant='p' color={"white"} sx={{fontSize:".8rem"}}>Copyright © 2024 </Typography>
            </Stack>
             
        </Container>


    </Box>
  )
}

export default Footer