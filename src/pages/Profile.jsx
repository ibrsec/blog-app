 

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"; 
import CardMedia from "@mui/material/CardMedia";
 


import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.user);
  return (
    <Container
      maxWidth="md"
      sx={{ minHeight: "calc(100vh - 170px)", mb: 3, p: 1 }}
    >
      <CardMedia
        component="img"
        alt="blog img"
        image={currentUser?.image} 
        sx={{ objectFit: "cover",objectPosition:"top", width: "100%", maxHeight: "60vh" }}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"start"}
        gap={1}
        pl={5}
        mt={5}
      >
        <Typography variant="h5" sx={{display:"flex", alignItems:"center", justifyContent:"flex-start"}}>
          <Box component="span" width={200}>Username: </Box>
          <Box component="span">{currentUser?.username}</Box>

          
        </Typography>
        <Typography variant="p" sx={{display:"flex", alignItems:"center", justifyContent:"flex-start"}}>
          <Box component="span" width={200} >Full name: </Box>
          <Box component="span">{currentUser?.firstName} {currentUser?.lastName}</Box>
          
        </Typography>
        <Typography variant="p"  sx={{display:"flex", alignItems:"center", justifyContent:"flex-start"}}>
        <Box component="span" width={200}>Email: </Box>
          <Box component="span">{currentUser?.email}</Box>
          
          
        </Typography>
        <Typography variant="p"  sx={{display:"flex", alignItems:"center", justifyContent:"flex-start"}}>
          <Box component="span" width={200}>City: </Box>
          <Box component="span">{currentUser?.city}</Box>
          
        </Typography>
        <Typography variant="p" sx={{display:"flex", alignItems:"center", justifyContent:"flex-start"}}>
          <Box component="span" width={200}>Bio: </Box>
          <Box component="span">{currentUser?.bio}</Box>
          
        </Typography>
      </Box>
    </Container>
  );
};

export default Profile;
