import React from "react";
// import Navbar from "./Navbar";
import img from "./img/track.jpg"
import "file:///D:/frontenddeveloper19/react/my-app/src/com-compo/Navbar.css"

function Home() {
    return(
    <>
   
    <h1>Home page</h1> 

    <div className="hello">
    <img src={img} alt="" />
    </div>
    </>
    )
    
}

export default Home