import React from 'react';
import '../style/Home.css';
import Foto from '../imagenes/yo.jpeg'
 
class Hom extends React.Component{
    render() {
    return (
    <div className="Badge">
               
            <div className="Badges__section-name">
                <img 
                 className="Badge__avatar"
                 src={Foto} 
                 alt="avatar"
                 />
            </div>
            <div className="Badge__footer" >
            <a   
            href="https://mail.google.com/mail/u/0/#inbox">
                vero.urrutiaa@gmail.com
            </a>
            
            </div>
            <div className="Badge__footer" >
            <a   
            href="https://www.linkedin.com/in/veronica-urrutia/">
                #veronica-urrutia
            </a>
            
            </div>
            </div>
    ); 
 }   
}
export default Hom; 