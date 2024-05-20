import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import useAuthApis from "../hooks/useAuthApis";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import useBlogApis from "../hooks/useBlogApis";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@mui/material";
import { useSelector } from "react-redux";

const NewBlog = () => {
  const newBlogSchema = object({
    title: string().max(30, "Max 30 chars"),
    image: string().url("Must be a valid url").max(400, "Max 400 chars"),
    categoryId: "",
    isPublish: "",
    content: string().max(2000, "Max 2000 chars"),
  });
  const { getDatasgeneric, postNewDatageneric } = useBlogApis();
  const { data } = useSelector((state) => state.blogs.categories);
  console.log("categories =", data);
  useEffect(() => {
    getDatasgeneric("categories", 30, 1);
  }, []);

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ minHeight: "calc(100vh - 220px)", mb: 3 }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: "secondary.main", p: 5 }}>
          <MapsUgcIcon sx={{ fontSize: "2.5rem" }} />
        </Avatar>
        <Typography component="h1" variant="h4">
          New Blog
        </Typography>

        <Formik
          initialValues={{
            title: "",
            image: "",
            categoryId: "",
            isPublish: "",
            content: "",
          }}
          validationSchema={newBlogSchema}
          onSubmit={(values, actions) => {
            console.log(values);

            //? register api call
            postNewDatageneric("blogs",values);

            //?resetform
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({
            values,
            isSubmitting,
            handleBlur,
            handleChange,
            touched,
            errors,
          }) => (
            <Form>
              <Box component="div" sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoFocus
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.title && Boolean(errors.title)}
                  helperText={errors.title}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="image"
                  label="Image Url"
                  name="image"
                  value={values.image}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.image && Boolean(errors.image)}
                  helperText={errors.image}
                />

                <FormControl fullWidth required margin="normal">
                  <InputLabel id="newblog-category-label">Category</InputLabel>
                  <Select
                    labelId="newblog-category-label"
                    id="newblog-category"
                    value={values.categoryId}
                    label="Category"
                    name="categoryId"
                    onChange={handleChange}
                  >
                    {data?.map((item) => (
                      <MenuItem key={item?._id} value={item?._id}>
                        {item?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth required margin="normal">
                  <InputLabel id="newblog-category-label">
                    Publish status
                  </InputLabel>
                  <Select
                    labelId="newblog-isPublish-label"
                    id="newblog-isPublish"
                    value={values.isPublish}
                    label="Publish status"
                    name="isPublish"
                    onChange={handleChange}
                  >
                    <MenuItem value={true}>Published</MenuItem>
                    <MenuItem value={false}>Draft</MenuItem>
                  </Select>
                </FormControl>

                <TextField 
                  multiline
                  rows={3} 
                  margin="normal"
                  required
                  fullWidth
                  id="content"
                  label="Content"
                  name="content"
                  value={values.content}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.content && Boolean(errors.content)}
                  helperText={errors.content} 
                />


                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                >
                  New Blog
                </Button>
                
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default NewBlog;
