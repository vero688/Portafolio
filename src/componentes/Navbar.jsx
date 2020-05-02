import React from 'react';
import '../style/Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";


class Navbar extends React.Component{
  render(){
    return (

      <nav id="navbar-example2" className="navbar   fixed-top">
        <ul className="nav ">
      <li className="nav">
     <Link className="nav-link"   activeClass="active"    to="section1"    spy={true}    smooth={true}    offset={-70}    duration= {500}>
     <img className="ico_M"
        src={require("../icons/Flor.jpg")}/></Link>
    </li>
  <li className="nav-item">
     <Link className="nav-link"   activeClass="active"    to="section1"    spy={true}    smooth={true}    offset={-70}    duration= {500}>Sobre Mi</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link"   activeClass="active"    to="section2"    spy={true}    smooth={true}    offset={-70}    duration= {500}>Skills</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link"   activeClass="active"    to="section3"    spy={true}    smooth={true}    offset={-70}    duration= {500}>Proyectos</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link"   activeClass="active"    to="section4"    spy={true}    smooth={true}    offset={-70}    duration= {500}>Contactos</Link>
    </li>
  
  </ul>
</nav>
   
 
    );
  }
}

export default Navbar;