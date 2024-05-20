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
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const loginSchema = object({
    email:string().email("Must be a valid email").max(40,"Max 40 chars"),
    password:string()
    .matches(/\d+/,"At least 1 number")
    .matches(/[a-z]/,"At least 1 lowercase")
    .matches(/[A-Z]/,"At least 1 uppercase")
    .matches(/[?!@$%&*]/,"At least 1 special char - [?!@$%&*]")
    .min(8,"Min 8 chars").max(16,"Max 16 chars")
  })

  const {loginApi} = useAuthApis();
const token = useSelector(state=>state.auth.token)
  
  return token ? <Navigate to="/" /> : (
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
          Sign in
        </Typography>

        <Formik
        initialValues={{
            email:"",
            password:""
        }}
        validationSchema={loginSchema}
        onSubmit={(values,actions)=>{

            console.log(values);


            //? login api call
            //show results
            //navigate
            //update global state
            loginApi(values);

            //?resetform
            // actions.resetForm();
            actions.setSubmitting(false);
        }}
        
        >
          {({values,isSubmitting,handleBlur,handleChange,touched,errors}) => (
            <Form>
              <Box
                component="div"  
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address - for fill -> doubleClick and leave"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={errors.email}
                  onDoubleClick={()=>{values.email = "testba@test.com"}}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password - for fill -> doubleClick and leave"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={errors.password}
                  onDoubleClick={()=>{values.password = "testBA1?"}}

                />
                <Typography>
                Email: testba@test.com <br/>Password: testBA1?
                </Typography>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                  Don't have an account?
                    <Link to="/register" variant="body2">
                      {" Sign Up"}
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
export default Login;
