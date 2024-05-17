import { Box, Container, Link, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{backgroundColor:"#196597", py:2}}>
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