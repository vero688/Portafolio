import React from 'react';
import '../style/New.css';
import Skills from '../componentes/Skills';
import Home from '../componentes/Home';
import Proyec from './Proyect';

class New extends React.Component{
  render() {
    return (
      <div>
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