import React from 'react';
import '../style/New.css';
import Skills from '../componentes/Skills';
import Home from '../componentes/Home';
import Proyec from './Proyect';

class BadgeNew extends React.Component{
  render() {
    return (
      <div>
        <div className="BadgeNew__hero">
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Home
              />
            </div>

            <div className="col-6">
              <Skills
              />
            </div>
            <div className="col-6">
              <Proyec
              />
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default BadgeNew;