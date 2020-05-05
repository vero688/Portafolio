import React from 'react';
import '../style/New.css';
import Skills from '../componentes/Skills';
import Home from '../componentes/Home';
import Proyec from './Proyect';
import Init from './Init';
import Contacto from './Contacto';

class New extends React.Component{
  render() {
    return (
      <div>
         <Init/>
        <div className="BadgeNew__hero">
        </div>
       
            <div>
              <Skills
              />
            </div>
            <div >
              <Proyec
              />
              </div>
              <div>
              <Contacto/>
              
              </div>
        </div>
    );
  }
}

export default New;