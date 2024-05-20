
import { Box, CardMedia, Container } from '@mui/material';
import png404 from '../assets/404.png';
const Notfound = () => {
  return (
    <Box sx={{ minHeight: "calc(100vh - 180px)" }} mt={5}>
      <Container maxWidth="md">
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"center"}
          gap={2}
        >
          <CardMedia
            component="img"
            alt="blog logo"
            image={png404}
            sx={{ objectFit: "contain", width: "100%", maxHeight: "40vh" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Notfound;
