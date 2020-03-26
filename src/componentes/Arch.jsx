import React from 'react';
import './styles/BadgeNew.css';
import Navbar from'./Navbar';



class New extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <div className="BadgeNew__hero">
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
            </div>
            <div className="col-6">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default New;