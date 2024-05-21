 

 
import Box from "@mui/material/Box";
import Container from "@mui/material/Container"; 
import Typography from "@mui/material/Typography"; 
import Link from "@mui/material/Link"; 
import CardMedia from "@mui/material/CardMedia"; 






import logo from '../assets/bloglogo.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
const About = () => {
  return (
    <Box sx={{ minHeight: "calc(100vh - 180px)" }} mt={5}>

    <Container maxWidth="md">
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"} gap={2}>
        <CardMedia
        component="img"
        alt="blog logo"
        image={logo} 
        sx={{ objectFit: "contain", width: "100%", maxHeight: "40vh" }}
      />
      <Typography variant={"h4"} fontWeight={"500"}>ibrsec</Typography>
      <Typography variant={"p"} fontWeight={"400"} fontSize={40}>Blog APP</Typography>
      <Box className="social-icons" display="flex" alignItems="center" justifyContent="center" gap={1} >
   <Link href="https://github.com/ibrsec" target={"_blank"}> <GitHubIcon /></Link>
    <Link href="https://www.linkedin.com/in/ibr-seckin/" target={"_blank"}> <LinkedInIcon /></Link>
    <Link href="#"> <XIcon /></Link>
    <Link href="#"> <InstagramIcon /></Link>
    <Link href="#"> <FacebookIcon /></Link>

      </Box>
        </Box>
    </Container>
    </Box>
  )
}

export default About