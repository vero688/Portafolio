import React from 'react';
import '../style/New.css';
import Skills from '../componentes/Skills';
import Home from '../componentes/Home';
import Proyec from './Proyect';
import Navbar from './Navbar';

class New extends React.Component{
  render() {
    return (
      <div>
         <Navbar/>
        <div className="BadgeNew__hero">
        </div>
        <div>
              <Home
              />
            </div>
            <div>
              <Skills
              />
            </div>
            <div className="container">
              <Proyec
              />
              </div>
        </div>
    );
  }
}

export default New;