import React from 'react';
import '../style/Init.css';
import Nav from './Navbar';
import { Link, animateScroll as scroll } from "react-scroll";



class Init extends React.Component{
   render() {
   return (
       <div>
<Nav/>
<div className="init" id="section">
</div>
<div className="middle">
  <p>Front-end Developer</p>
  <li className="nav-item">
      <Link className="nav-link d-flex"   activeClass="active"    to="section1"    spy={true}    smooth={true}    offset={-70}    duration= {500}> <button type="button" className="btn btn-warning text-white">Sobre mi</button> </Link>
      </li>
</div>
     </div>
   );
 }
}
export default Init; 