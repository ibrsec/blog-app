import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

import IconsComp from "./IconsComp";
import { useNavigate } from "react-router-dom";

const BlogCard = ({
  image,
  title,
  content,
  createdAt,
  likes,
  comments,
  countOfVisitors,
  _id,
}) => {
  
  const navigate = useNavigate();

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
        <Stack
          display={"flex"}
          direction={"row"}
          alignItems={"center"}
          gap={1}
          justifyContent={"space-between"}
          width={"100%"}
          my={2}
        >
          <IconsComp
            likes={likes}
            comments={comments}
            countOfVisitors={countOfVisitors}
            _id={_id}
            handleCommentClick={()=>{}}
          />

          <Button
            variant="contained"
            onClick={() => navigate(`/detail/${_id}`)}
          >
            Read More
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};
export default BlogCard;
