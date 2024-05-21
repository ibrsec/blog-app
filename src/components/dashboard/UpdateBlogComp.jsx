
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import { Form, Formik } from "formik";
import { object, string } from "yup"; 
import { useEffect } from "react";    
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { useSelector } from "react-redux";
import useBlogApis from "../../hooks/useBlogApis";




const UpdateBlogComp = ({setOpen}) => {
    const singleBlogInfo = useSelector(state=> state.blogs.singleBlog)

    const updateBlogSchema = object({
        title: string().max(70, "Max 70 chars"),
        image: string().url("Must be a valid url").max(1000, "Max 1000 chars"),
        categoryId: "",
        isPublish: "",
        content: string().max(10000, "Max 10000 chars"),
      });
      const { getDatasgeneric, editBlogApi } = useBlogApis();
      const { data } = useSelector((state) => state.blogs.categories);
      console.log("categories =", data);
      useEffect(() => {
        getDatasgeneric("categories", 30, 1);// eslint-disable-next-line
      }, []);
  return (
    <Formik
          initialValues={{
            title: singleBlogInfo?.title,
            image: singleBlogInfo?.image,
            categoryId: singleBlogInfo?.categoryId?._id,
            isPublish: singleBlogInfo?.isPublish,
            content: singleBlogInfo?.content,
          }}
          validationSchema={updateBlogSchema}
          onSubmit={(values, actions) => {
            console.log(values);

            //? register api call
            editBlogApi(singleBlogInfo?._id,values);

            //?resetform
            // actions.resetForm();
            setOpen(false)
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
                  Update Blog
                </Button>
                
              </Box>
            </Form>
          )}
        </Formik>
  )
}

export default UpdateBlogComp