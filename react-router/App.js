//  import logo from './logo.svg';
import React from "react";

// import './App.css';
// import Test from "./Test"; 

import { BrowserRouter , Route ,Routes} from "react-router-dom"; //step2
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Navbar from "./com-compo/Navbar";


function App() {
  return(
    <>
      <BrowserRouter>
      
         <Routes>
           {/* <Route path="/" element= {<> <Navbar/> <Home/></>}/> */}
           {/* <Route path="/home" element={<h1>home</h1>}/> */}
           {/* <Route path="/About" element={<About/>}/> */}
           {/* <Route path="/Product" element={<Product/>}/> */}
          <Route  path="/" element={<Navbar/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="product" element={<Product/>}/>        

          </Route>
         </Routes>
         
      </BrowserRouter>     

    </>
  )

  
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
