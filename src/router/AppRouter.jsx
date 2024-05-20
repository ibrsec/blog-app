import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import MyBlog from "../pages/MyBlog";
import Profile from "../pages/Profile"; 
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import NewBlog from "../pages/NewBlog";
import BlogDetail from "../pages/BlogDetail";
import Notfound from "../pages/Notfound";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/newblog" element={<PrivateRouter />} >
          <Route path="" element={<NewBlog />}/>
        </Route>
        <Route path="/detail/:id" element={<PrivateRouter />} >
          <Route path="" element={<BlogDetail />}/>
        </Route>


        <Route path="/myblog" element={<PrivateRouter />} >
          <Route path="" element={<MyBlog />}/>
        </Route>
        <Route path="/profile" element={<PrivateRouter />} >
          <Route path="" element={<Profile />}/>
        </Route>

          <Route path="/about" element={<About />}/>
          <Route path="*" element={<Notfound />}/>

 



      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
