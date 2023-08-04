import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header(){
   
    return(
        <div className="header">
        <Link className="logo">Portfolio</Link>
        <div >
        <Link to="/" className="navbar head" style={{color:"#0ef"}} >Home</Link>
        <Link to="/About" className="navbar">About</Link>
        <Link to="/Skills" className="navbar">Skills</Link>
        <Link to="/Projects" className="navbar">Projects</Link>
        <Link to="/Contact" className="navbar">Contact</Link>
        </div>
        <Outlet/>
        
        </div>
    )
}

export default Header;