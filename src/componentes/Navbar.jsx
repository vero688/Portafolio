import React from 'react';
import '../style/Navbar.css';
// import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component{
  render(){
    return <div className="Navbar">
        <div className="container-fluid">

        {/* <nav className="menu">
  <input type="checkbox" href="#"
   className="menu-open" name="menu-open" id="menu-open"/>
  <label className="menu-open-button" for="menu-open">
    <span className="hamburger hamburger-1"></span>
    <span className="hamburger hamburger-2"></span>
    <span className="hamburger hamburger-3"></span>
  </label>
  {/* <Link to="/" className="menu-item"> <img  src={require("../icons/linkedin-icon-2.svg")}/> </Link> */}
  {/* <a href="/Proyect" className="menu-item"> <i className="fa fa-plus"></i> </a>
  <a href="#" className="menu-item"> <i className="fa fa-heart"></i> </a>
  <a href="#" className="menu-item"> <i className="fa fa-plus"></i> </a>
  <a href="#" className="menu-item"> <i className="fa fa-envelope"></i> </a> 
</nav>
 */} */}

<nav id="navbar-example2" class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
  <li class="nav-item">
      <a class="nav-link" href="Home">Sobre Mi</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/Proyect">Proyectos</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="Skills">Skillis</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link "  href="Contacto" >Contactos</a>
        <div role="separator" class="dropdown-divider"></div>
    </li>
  </ul>
</nav>
<div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
  <h4 id="fat">Sobre Mi </h4>
  <p>...</p>
  <h4 id="mdo">Proyectos</h4>
  <p>...</p>
  <h4 id="one">Skillis</h4>
  <p>...</p>
  <h4 id="two">Contacto</h4>
  <p>...</p>
</div>

 </div>
    </div>;
  }
}

export default Navbar;