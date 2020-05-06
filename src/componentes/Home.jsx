import React from 'react';
import '../style/Home.css';
import Fot from '../imagenes/yo.jpeg'


class Home extends React.Component{
   render() {
   return (
       <div className="Badge"id="section1">
       <div className="Badge__header">
       <div className="section-name">
         <img
           className="Badge__avatar"
           src={Fot}
           alt="Avatar"
         />
         <h1>
       Veronica Urrutia
         </h1>
       </div>
       </div>
       <div className="container" >
    <p>
    Actualmente me he interiorizado en el mundo de la Informática,
    apasionada por el aprendizaje,
     nuevas tecnologías y la innovación.
      Profesional con gran capacidad para emprender proyectos, 
      autodidacta. Principalmente en Javascript, CSS3, HTML5 y  React. 
     dispuesta a aprender de las nuevas experiencias y amante de los desafíos, 
     mi objetivo es ser un aporte para el equipo.
      Desde el desarrollo web pude potenciar mi creatividad y lógica.
       </p>
       <a href="https://www.canva.com/design/DAD28dXok3I/ubxUd7Zq6hhEVGUnZjqktg/view?utm_content=DAD28dXok3I&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" 
      className="btn btn-warning text-white">Descarga mi CV</a>
       </div>

       <div className="Badge__footer">
       <li className="nav-item">
      
      </li>
       </div>
       
     </div>
   );
 }
}
export default Home; 