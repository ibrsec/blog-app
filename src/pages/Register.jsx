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

const Register = () => {
  const registerSchema = object({
    username: string().max(30, "Max 30 chars"),
    firstName: string().max(30, "Max 30 chars"),
    lastName: string().max(30, "Max 30 chars"),
    email: string().email("Must be a valid email").max(40, "Max 40 chars"),
    image: string().url("Must be a valid url").max(400, "Max 400 chars"),
    city: string().max(30, "Max 30 chars"),
    bio: string().max(100, "Max 100 chars"),
    password: string()
      .matches(/\d+/, "At least 1 number")
      .matches(/[a-z]/, "At least 1 lowercase")
      .matches(/[A-Z]/, "At least 1 uppercase")
      .matches(/[?!@$%&*]/, "At least 1 special char - [?!@$%&*]")
      .min(8, "Min 8 chars")
      .max(16, "Max 16 chars"),
  });

  const { registerApi } = useAuthApis();

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ minHeight: "calc(100vh - 205px)",mb:3 }}
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>

        <Formik
          initialValues={{
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            image: "",
            city: "",
            bio: "",
            password: "",
          }}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            console.log(values);

            //? register api call
            registerApi(values);

            //?resetform
            // actions.resetForm();
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
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.username && Boolean(errors.username)}
                  helperText={errors.username}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={errors.firstName}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={errors.lastName}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={errors.email}
                />
                <TextField
                  margin="normal"
                  //   required

                  fullWidth
                  id="city"
                  label="City"
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  //   onBlur={handleBlur}
                  //   error={touched.city && Boolean(errors.city)}
                  //   helperText={errors.city}
                />
                <TextField
                  margin="normal"
                  //   required
                  fullWidth
                  id="image"
                  label="Image"
                  type="url"
                  name="image"
                  value={values.image}
                  onChange={handleChange}
                  //   onBlur={handleBlur}
                  //   error={touched.image && Boolean(errors.image)}
                  //   helperText={errors.image}
                />
                <TextField
                  margin="normal"
                  //   required
                  fullWidth
                  id="bio"
                  label="Bio"
                  type="text"
                  name="bio"
                  value={values.bio}
                  onChange={handleChange}
                  //   onBlur={handleBlur}
                  //   error={touched.bio && Boolean(errors.bio)}
                  //   helperText={errors.bio}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={errors.password}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item>
                    Do have an account?
                    <Link to="/login" variant="body2">
                      {" Sign In"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Register;

// {  email: "test1@test.com",  firstName: "test1",  image: "",  lastName: "test1",  password: "testTEST1?",  username: "test1",};
