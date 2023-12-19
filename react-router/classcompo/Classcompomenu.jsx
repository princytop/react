

import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Classcompomenu extends Component{
  render(){
    return(
      <>
       <ul>
         <li><Link to="Classcompointro">Classcompointro</Link></li>
       
         <li><Link to="Classone">Classone</Link></li>
         <Outlet/>
       </ul>
      
      </>
      )
    }
  }

  export default Classcompomenu




















