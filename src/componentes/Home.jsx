import React from 'react';
import '../style/Home.css';
import Fot from '../imagenes/yo.jpeg'


class Badges extends React.Component{
   render() {
   return (
       <div className="Badge">
       <div className="Badge__header">
        
       </div>

       <div className="Badge__section-name">
         <img
           className="Badge__avatar"
           src={Fot}
           alt="Avatar"
         />
         <h1>
       Veronica Urrutia
         </h1>
       </div>

       <div className="Badge__section-info">
    <p>
    Soy una persona responsable,
     dispuesta a aprender de las nuevas experiencias y amante de los desafíos, 
     mi objetivo es ser un aporte para el equipo.
      Desde el desarrollo web pude potenciar mi creatividad y lógica.

    </p>
       </div>

       <div className="Badge__footer"></div>
     </div>
   );
 }
}
export default Badges; 