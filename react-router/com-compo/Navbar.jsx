// import React from "react";

// import { Link } from "react-router-dom";

// function Navbar() {
//     return(
//         <>
//         <div>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/About">About</Link></li>
//                 <li><Link to="/Product">Product</Link></li>

//             </ul>
//         </div>
//         </>
//     )

// }

// export default Navbar
// import Button from './button';


import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import "file:///D:/frontenddeveloper19/react/my-app/src/com-compo/Navbar.css"
import img from "../img/track.jpg"
// import Navbar from "./com-compo/Navbar";

import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Navbar() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <>        <MDBNavbar expand='lg' light bgColor='' className='my' >
            <MDBContainer fluid >
                <MDBNavbarBrand href='#'>
                    <div className='img-1'>
                         <img src={img} alt="" />
                    </div>
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic} >
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#'>
                                <Link to="/home" >Home</Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#'>
                                <Link to="/About">About</Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>


                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#'>
                                <Link to="/Product">Product</Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#'>
                                <Link to="/example">Example</Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                    
                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                    Dropdown
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>HTML</MDBDropdownItem>
                                    <MDBDropdownItem link>CSS</MDBDropdownItem>
                                    <MDBDropdownItem link>JAVASCRIPT</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                PATEL
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    
                  
                   {/* <Link><MDBIcon fas icon="phone" className='icon-phone'  color='dark' /></Link>
                    
                 <Link><MDBIcon fab icon="linkedin" className='icon-phone' color='dark' /></Link> */}



                     {/* <div className='form'> */}
                    {/* <form className='d-flex input-group w-auto' > */}
                        {/* <input type='search' className='form-control' placeholder='Type query' aria-label='Search'  /> */}
                        {/* <MDBBtn color='dark'>Search</MDBBtn> */}
                    {/* </form> */}
                    {/* </div> */}

                    {/* <Button/> */}

                    
          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
         
                    
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        {/* <Outlet/> */}
        </>

    );
}