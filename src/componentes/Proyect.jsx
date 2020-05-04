import React from 'react';
import '../style/Proyecto.css';

function Proyec() {
        return(<div className="container-fluid">
          
        <section className="row previous-events"  id="section3">
        <div className="row col offset-md-1 col-md-3 section-info">
          <h2 className="section-header ">Proyectos</h2>
       
        </div>
        <div className="row p-0 col col-md-7  justify-content-around">
          <div  className="card">
            <div class="event-title">Pet Place</div>
            <p>Es una App mobile diseñada 
    para mostrar la ubicacion de lugares
      Pet Friendly por medio de mapas de Here </p>
      <a href="https://github.com/vero688/SCL012-here-app"  className="btn btn-darkgoldenrod">Ghithub</a>
          </div>
          <div  className="card ">
            <div className="event-title">Burger Queen</div>
            <p>Pensada principalmente para solucionar fluida y eficiente
la toma de pedidos y la llegada de pedidos a la cocina sin papeles.  </p>
      <a href="https://github.com/vero688/burger-queen.github.io" className="btn btn-darkgoldenrod">Ghithub</a>
          </div>
        
          <div className="card">
            <div className="event-title">Sparrow</div>
            <p>Esta aplicación esta enfocada en afisionados de los juegos de mesa.
              Compartiendo experiencias con cada juego de mesa. </p>
      <a href="https://github.com/vero688/SCL012-Social-Network" className="btn btn-darkgoldenrod">Ghithub</a>
          </div>
        </div>
      </section>
      </div>
    


);
    
}

export default Proyec;



















































