<a name="readme-top"></a>
 
 
<!-- PROJECT LOGO -->
<br />
<div align="center">
   
  <a href="https://github.com/ibrsec/blog-app/">
    <img src="./public/bloglogo.png" alt="Logo" width="250"   >
  </a>

  <h3 align="center">Blog App</h3>

  <p align="center">
    An awesome Blog App
    <a href="https://github.com/ibrsec/blog-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://ultra-blog-app.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/ibrsec/blog-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/ibrsec/blog-app/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>📎 Table of Contents 📎 </summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
     <!-- <li><a href="#figma">Figma</a></li> -->
     <li><a href="#overview">Overview</a></li>
     <li><a href="#quick-setup">Quick Setup</a></li>
     <li><a href="#directory-structure">Directory structure</a></li>
     <li><a href="#built-with">Built With</a></li>
    <!-- <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li> -->

    
  </ol>
</details>





---

<!-- ABOUT THE PROJECT -->
<a name="about-the-project"></a>
## ℹ️ About The Project

[![blog-app](./public/project.gif)](https://ultra-blog-app.vercel.app/)




<p align="right">(<a href="#readme-top">back to top</a>)</p>


---

<!-- ## Figma 

<a href="https://www.figma.com/file/ePyCHKsx2ODB32uLgyUEEd/bootstrap-home-page?type=design&node-id=0%3A1&mode=design&t=edDzadCB9Ev5FS1a-1">Figma Link</a>  

  <p align="right">(<a href="#readme-top">back to top</a>)</p>




--- -->
<a name="overview"></a>
## 👀 Overview

📦 Used a ready backend for blog api </br>
🎯 Used React environment, redux toolkit,redux-persist,react-routing,material, axios, axios instance, formik, yup, toastify, </br>
🖥 You can Register or login with the ready credentials on the login page, Contents can be accessed befofre logging in!  </br>
🔩 After login there are  a few features you can access like adding new blog, fav, seeing details of blogs, make and read comments, managing own blog profile including update delete blogs and comments</br>
💪 You can manage your blogs your own my blogs page after login</br>
<!-- 🌱 ---</br> -->
<!-- 🐞 -----</br> -->
<!-- 🏀 ------   -->
</br>


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<a name="quick-setup"></a>
## 🛫 Quick Setup

```sh
# clone the project
git clone https://github.com/ibrsec/blog-app.git

# enter the project directory
cd blog-app

# install dependency
npm install || yarn install

# develop
npm run dev || yarn start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ## 🐞 Debug

![blog-app.gif](/blog-app.gif) -->








<a name="directory-structure"></a>
## 📂 Directory structure 

```diff
blog-app  (folder)
  |          
  |---public (folder) 
  |                
+ |---src (folder) 
  |     |---assests (folder) 
  |     |           
  |     |---pages (folder)       
  |     |           
  |     |---components (folder) 
  |     |    
  |     |---app (folder)       
  |     |     └---store.jsx       
  |     |          
  |     |---features (folder)       
  |     |     |---authSlice.jsx  
  |     |     └---blogSlice.jsx       
  |     |          
  |     |---router (folder)        
  |     |     |---PrivateRoute.jsx  
  |     |     └---AppRouter.jsx       
  |     |          
  |     |---hooks (folder)        
  |     |     |---useAxios.jsx  
  |     |     |---useAuthApis.jsx  
  |     |     └---useBlogApis.jsx       
  |     |          
  |     |---helper (folder)        
  |     |     └---ToastNotify.js       
  |     |          
  |     |---App.js 
  |     |---Index.js
  |     └---Index.css
  |      
  |----package.json
  |----yarn.lock 
  |----.env.local
  └----readme.md 
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="built-with"></a>
### 🏗️ Built With

 
<!-- https://dev.to/envoy_/150-badges-for-github-pnk  search skills-->

 <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">
 <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white&color=red"> 
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
 <!-- <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">  -->
 <!-- <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">  -->
 <!-- <img src="https://img.shields.io/badge/Vite-AB4BFE?style=for-the-badge&logo=vite&logoColor=FFC920">  -->
 <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> 
 <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"> 

 <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"> 
 <img src="https://img.shields.io/badge/Redux Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white"> 
 <img src="https://img.shields.io/badge/Redux--Persist -593D88?style=for-the-badge&logo=redux&logoColor=white"> 
 <!-- <img src="https://img.shields.io/badge/Context API-593D88?style=for-the-badge&logo=context&logoColor=white">  -->


 <img src="https://img.shields.io/badge/Axios-593D88?style=for-the-badge&logo=axios&logoColor=white"> 
 <!-- <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">  -->

 <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"> 
 <img src="https://img.shields.io/badge/Formik-172B4D?style=for-the-badge&logo=formik&logoColor=white"> 
 <img src="https://img.shields.io/badge/Yup-172B4D?style=for-the-badge&logo=yup&logoColor=white"> 
 <img src="https://img.shields.io/badge/Toastify-45CC11?style=for-the-badge&logo=toastify-ui&logoColor=white"> 
 



 
<p align="right">(<a href="#readme-top">back to top</a>)</p>


