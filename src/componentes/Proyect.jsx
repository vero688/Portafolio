import React from 'react';
import '../style/Proyecto.css';

function Proyec() {
        return(
<div className=" container" id="section3" >
  <h2 className="blueTitle">Proyectos que he trabajao recientemenete</h2>

  <div className="row proyectSection">

    <div className="col-lg-6 logoSpacing">
    <h1 className="card-title">Pet Place</h1>
    <p className="card-text">Pet places es una App mobile diseñada 
    para dar solución en el contexto de la 
    movilidad e inclusión en la ciudad de
     personas que presenten algún tipo muestra la ubicacion de lugares
      Pet Friendly por medio de mapas de Here.</p>
    <a href="https://github.com/vero688/SCL012-here-app" className="btn btn-dark">Ghithub</a>
  </div>
</div>
   <div className="col-lg-6 logoSpacing">
    <h1 className="card-title">Burger Queen</h1>
    <p className="card-text">pensada principalmente para ser la solucion para
     meseros y chefs que integran un restaurante, con el
      propósito que puedan compartir la información de cada solicitud de pedido 
      logrando de esta manera una
     comunicación fluida y eficiente, 
     mejorando así tanto la atención prestada cómo los tiempos de entrega.</p>
    <a href="https://github.com/vero688/burger-queen.github.io" className="btn btn-dark">Ghithub</a>
  </div>

  <div className="col-lg-6 logoSpacing">
    <h1 className="card-title">Red Social</h1>
    <p className="card-text">Esta aplicación esta enfocada en afisionados de los juegos de mesa.
     Los participantes deberán registrarse para crear su propio perfil
    , de esta manera podran realizar sus publicaciones 
    sobre sus experiencias con algun juego en particular.</p>
    <a href="https://github.com/vero688/SCL012-Social-Network" className="btn btn-dark">Ghithub</a>
  </div>
</div>


        );
    
}

export default Proyec;