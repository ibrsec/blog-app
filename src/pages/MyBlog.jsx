import { useEffect } from "react";
import useBlogApis from "../hooks/useBlogApis";
import { useSelector } from "react-redux";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import BlogCard from "../components/dashboard/BlogCard";
import { useNavigate } from "react-router-dom";

const MyBlog = () => {
  const { getUsersBlogs } = useBlogApis();
  const currentUser = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    getUsersBlogs(currentUser?._id);
  }, []);

  const blogs = useSelector((state) => state.blogs.blogs);
  console.log("myblogdan blogs = ", blogs?.data);
  return (
    <Box sx={{ minHeight: "calc(100vh - 180px)" }} mt={5}>
      <Container maxWidth="xl">
        {!blogs?.data?.length ? (
          // true
          <>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={1}
              mt={3}
              mb={3}
            >
              <Typography variant="h5" color={"crimson"} m={10}>
                There is No Blog!
              </Typography>
              <Button variant="contained" onClick={() => navigate("/newblog")}>
                Write Blogs
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={1}
              mt={3}
              mb={3}
            >
              <Typography variant="h4">Drafts</Typography>
              <Grid
                container
                gap={2}
                justifyContent="center"
                alignItems="center"
                mt={3}
              >
                {blogs?.data?.map(
                  (blog) =>
                    !blog.isPublish && (
                      <Grid
                        item
                        key={blog._id}
                        xs={10}
                        sm={9}
                        md={5}
                        lg={4}
                        xl={3}
                      >
                        <BlogCard {...blog} />
                      </Grid>
                    )
                )}
              </Grid>
            </Box>
            <hr />
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={1}
              mt={3}
              mb={3}
            >
              <Typography variant="h4">Publishs</Typography>
              <Grid
                container
                gap={2}
                justifyContent="center"
                alignItems="center"
                mt={3}
              >
                {blogs?.data?.map(
                  (blog) =>
                    blog.isPublish && (
                      <Grid
                        item
                        key={blog._id}
                        xs={10}
                        sm={9}
                        md={5}
                        lg={4}
                        xl={3}
                      >
                        <BlogCard {...blog} />
                      </Grid>
                    )
                )}
              </Grid>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};

export default MyBlog;
