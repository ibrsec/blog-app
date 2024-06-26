import  Container  from "@mui/material/Container";
import  Grid   from "@mui/material/Grid";
import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const { blogs } = useSelector((state) => state.blogs);
  console.log("blogs from blogs", blogs?.data);
  return (
    <Container maxWidth="xl" >
      <Grid container gap={2} justifyContent="center" alignItems="center" mt={5}>
        {blogs?.data?.map((blog) => (
          <Grid item key={blog._id} xs={10} sm={9} md={5} lg={4} xl={3}>
              <BlogCard  {...blog} />
            </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;
