import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBlogApis from "../hooks/useBlogApis";
import { useSelector } from "react-redux";
import {
  Avatar,
  Badge,
  Box,
  Button,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import IconsComp from "../components/dashboard/IconsComp";
import CommentComp from "../components/dashboard/CommentComp";
import BlogEditButtons from "../components/dashboard/BlogEditButtons";

const BlogDetail = () => { 
  const { id } = useParams();

  const { getSingleBlogInfo } = useBlogApis();
  const singleBlogInfo = useSelector((state) => state.blogs.singleBlog);
  const currentUser = useSelector((state) => state.auth.user);
 

  console.log("singleBlogInfo", singleBlogInfo);
  useEffect(() => {
    getSingleBlogInfo(id);
  }, []);

  const [openComments, setOpenComments] = useState(false);
  const handleCommentClick = () => {
    setOpenComments(!openComments);
  };

  return (
    <Box sx={{ minHeight: "calc(100vh - 180px)" }} mt={5} mb={5}>
      <Container maxWidth="md">
        <Stack
          display={"flex"}
          direction={"column"}
          justifyContent={"center"}
          gap={2} 
        >
          <CardMedia
            component="img"
            alt="blog img"
            image={singleBlogInfo?.image}
            sx={{ objectFit: "contain", width: "100%", maxHeight: "70vh" }}
 
          />
          <Box
            ml={3}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            gap={4} 

          >
            <Box display={"flex"} alignItems={"center"} gap={2} >
              <Avatar
                sx={{ color: "blueviolet", backgroundColor: "skyblue" }}
              />
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"start"}
                justifyContent={"center"}
                
              >
                <Typography fontWeight={"bold"}>
                  {singleBlogInfo?.userId?.username}
                  {
                
                currentUser?._id === singleBlogInfo?.userId?._id &&
                <Box component={"span"} ml={5} sx={{backgroundColor:"darksalmon",color:"white", padding:"3px 5px", borderRadius:"10px"}}>it's you!</Box>
                
              }
                </Typography>
                <Typography color={"gray"}>
                  {new Date(singleBlogInfo?.createdAt).toLocaleString("en-EN")}
                </Typography>
              </Box>
            </Box>
            <Box >
              <Typography fontWeight={"bold"} mb={1} >
                {singleBlogInfo?.title}


                {
                
                currentUser?._id === singleBlogInfo?.userId?._id &&
                (singleBlogInfo?.isPublish ? 
                <Box component={"span"} ml={5} sx={{backgroundColor:"green",color:"white", padding:"3px 5px", borderRadius:"10px"}}>Published</Box>
                :
                
              <Box component={"span"} ml={5} sx={{backgroundColor:"bisque",color:"brown", padding:"3px 5px", borderRadius:"10px"}}>Draft</Box>)
              }
              </Typography>
              <Typography color={"gray"} mb={2}>
                Categroy: {singleBlogInfo?.categoryId?.name}
              </Typography>



              <Typography textAlign={"justify"}>
                {singleBlogInfo?.content?.replaceAll("<p>", "").replaceAll("</p>", "")}
              </Typography>
            </Box>
            <Box >
              <IconsComp
                likes={singleBlogInfo?.likes}
                comments={singleBlogInfo?.comments}
                countOfVisitors={singleBlogInfo?.countOfVisitors}
                _id={singleBlogInfo?._id}
                handleCommentClick={handleCommentClick}
              />
            </Box>

                  <Box alignSelf={"stretch"} >
                    {currentUser?._id === singleBlogInfo?.userId?._id && (
                      <BlogEditButtons />
                    )}
                  </Box>



            <Box   alignSelf={"stretch"}>
            {openComments && <CommentComp />}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default BlogDetail;
