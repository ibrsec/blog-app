import { Container, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const { blogs } = useSelector((state) => state.blogs);
  console.log("blogs", blogs);
  return (
    <Container maxWidth="xl" >
      <Grid container gap={2} justifyContent="center" alignItems="center" mt={5}>
        {blogs?.map((blog) => (
            <Grid item key={blog._id} xs={10} sm={9} md={5} lg={4} xl={3}>
          <BlogCard  {...blog} />
            </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;
