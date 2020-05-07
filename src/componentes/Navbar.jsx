import React from 'react';
import '../style/Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";


class Navbar extends React.Component{
  render(){
    return (
      
      <nav id="navbar-example2" className="navbar   fixed-top">
      <scroll>
      <ul className="nav ">
      <li className="nav-item">
      <Link className="nav-links d-flex"   activeClass="active"    to="section"    spy={true}    smooth={true}    offset={-70}    duration= {500}> <img className="ico_M"
      alt="Logo" src={require("../icons/v.jpg")}/></Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link"   activeClass="active"    to="section1"    spy={true}    smooth={true}    offset={-70}    duration= {500}>Sobre mi</Link>
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
      </scroll>
      </nav>
      
      
      );
    }
  }
  
  export default Navbar;