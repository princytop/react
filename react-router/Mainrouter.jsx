import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./com-compo/Navbar";
import Home from "./Home";


// import { lazy } from "react";
import { Suspense } from "react";
// import About from "./About";
import Product from "./Product";
import Example from "./Example";

const About = React.lazy(()=> import("./About"))
// import Classcomporoutes from './classcompo/Classcomporoutes';
// import Classcompointro from "./classcompo/Classcompointro";

const Classcomporoutes = React.lazy(()=> import("./classcompo/Classcomporoutes"))


const Mainrouter = createBrowserRouter([
    {
      path: "/",   
      element : <><Navbar/></>     
    },
    {
      path: "/Home",   
      element : <><Navbar/><Home/></>     
    },
    {
      path: "/About",   
      element : <><Navbar/>
      <Suspense fallback={<h1>loading...</h1>}> <About/></Suspense>
      </>     
    },
    {
      path: "/Product",   
      element : <><Navbar/><Product/></>     
    },
    {
      path: "/example",   
      element : <><Navbar/><Example/></> ,
      children : [
        {
            path :"Classcompo/*",
            element :<><Suspense fallback={<h1>loading...</h1>}><Classcomporoutes/></Suspense> </>
        }
        // {
        //     path :"classcompo",
        //     element :<> <Classcompointro/> </>
        // }
      ]
    },
])


export default Mainrouter