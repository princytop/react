import React from "react";
import { Link, Outlet } from "react-router-dom";
// const Example = ( ) =>{

// }
function Example() {
    return(
    <>
    <h1>Example</h1>
    <div className="co mtntainer-3">
        <div className="row">
            <div className="col-6">
                <h3>
                    <Link to="/example/classcompo">class component</Link>
                </h3>
                 
            </div>
            <div className="col-6">
                <h3><Link>Function component</Link></h3>
            </div>

        </div>

        <div className="row my-3">
            <div className="col-md-12">
               <Outlet></Outlet>
            </div>

        </div>
    </div>
    </>


)
    }

export default Example