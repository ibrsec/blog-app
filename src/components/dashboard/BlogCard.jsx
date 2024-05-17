import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {   Box, Stack } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import VisibilityIcon from '@mui/icons-material/Visibility';

const BlogCard = ({ image, title, content,createdAt,likes,comments,countOfVisitors }) => {
  return (
    
      <Card
      // sx={{ maxWidth: 345 }}
      >
        <CardMedia component="img" alt="blog img" height="140" image={image} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color={"primary.main"}
            fontWeight="semibold"
            sx={{ textShadow: "1px 1px 3px skyblue" }}
          >
            {title}
          </Typography>
          <Typography gutterBottom variant="p" component="p" color="dimgray">
            Publish Date: {new Date(createdAt).toLocaleString("tr-TR")}
          </Typography>
          <Typography
            variant="body2"
            color="secondary.dark"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {content.replace("<p>", "").replaceAll("</p>", "")}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack display={"flex"} direction={"row"} alignItems={"center"} gap={1} justifyContent={"space-between"} width={"100%"} my={2}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Box display={"flex"} alignItems={"center"} gap={1} component="button" variant="text" sx={{cursor:"pointer",backgroundColor:'transparent', borderRadius:"50%", p:"5px", border:"none", transition:".5s all",":hover":{backgroundColor:"rgba(1,1,1,.1)"},":active":{backgroundColor:"rgba(1,1,1,.2)"}}}><FavoriteIcon /> {likes?.length}</Box>
              <Box display={"flex"} alignItems={"center"} gap={1} sx={{cursor:"pointer",backgroundColor:'transparent', borderRadius:"50%", p:"5px", border:"none", transition:".5s all",":hover":{backgroundColor:"rgba(1,1,1,.1)"},":active":{backgroundColor:"rgba(1,1,1,.2)"}}}><MessageIcon /> {comments?.length}</Box>
              <Box display={"flex"} alignItems={"center"} gap={1} sx={{cursor:"pointer",backgroundColor:'transparent', borderRadius:"50%", p:"5px", border:"none", transition:".5s all",":hover":{backgroundColor:"rgba(1,1,1,.1)"},":active":{backgroundColor:"rgba(1,1,1,.2)"}}}><VisibilityIcon /> {countOfVisitors}</Box>
            </Box>
            <Button variant="contained">
              Read More
            </Button>
          </Stack>
        </CardActions>
      </Card>
      
  );
};
export default BlogCard;
