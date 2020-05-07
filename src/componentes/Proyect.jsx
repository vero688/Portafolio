import React from 'react';
import '../style/Proyecto.css';

function Proyec() {
        return( 
        <div className="container-fluid" >
            <h1>Proyectos </h1>
        <br/>
          <div className="container-card row" id="section3">
            <div class=" col-12 col-lg-3 content-img div1  container">
        <img src={require("../imagenes/verito-1.png")} alt="img"/>
  <div class="overlay">
      <div class="items "></div>
      <div class="items head px-2">
        <h3>Pet Place</h3>
        <br/>
        <p>Pet places es una App mobile diseñada para
           dar solución en el contexto de la movilidad e 
           inclusión en la ciudad de personas que presenten
            algún tipo de trastorno adaptativo y que necesiten 
            estar acompañada constantemente de su mascota de contención emocional.
</p>
      </div>
      <div class="items price">
        <p class="old "></p>
        <p class="new"></p>
      </div>
      <div class="items cart">
        <i class="fab fa-instagram"></i>
        <span>  <a href="https://github.com/vero688/SCL012-here-app" 
      className="btn btn-warning text-white">Github</a></span>
        <span>  <a href="https://here-61f73.web.app/" 
      className="btn btn-warning text-white">Proyecto</a></span>
    </div>
  </div>
  </div>

   <div class=" col-12 col-lg-3 content-img  div2 container">
   <img src={require("../imagenes/verito-3.png")} alt="img"/>
<div class="overlay">
 <div class="items "></div>
 <div class="items head px-2">
   <h3>Burger Queen</h3>
   <p> La presente Aplicación fue pensada principalmente 
     para ser la solucion para meseros y chefs que integran un restaurante,
      con el propósito que puedan compartir la información de cada solicitud 
      de pedido logrando de esta manera una comunicación fluida y eficiente, 
      mejorando así tanto la atención prestada cómo los tiempos de entrega.</p>
 </div>
 <div class="items price">
   <p class="old "></p>
   <p class="new"></p>
 </div>
 <div class="items cart">
   <i class="fab fa-instagram"></i>
   <span>  <a href="https://github.com/vero688/burger-queen" 
      className="btn btn-warning text-white">Github</a></span>
        <span>  <a href="https://burg-d5429.web.app" 
      className="btn btn-warning text-white">Proyecto</a></span>
    
</div>
</div>
</div>

<div class=" col-12 col-lg-3 content-img div3 container">
<img src={require("../imagenes/verito-2.png")} alt="img"/>
<div class="overlay">
<div class="items "></div>
<div class="items head px-2">
<h3>Red Social</h3>
<p>Sparrow Player es una Red Social sobre Juegos de mesa,
   donde podras compartir tus opiniones con otros jugadores y enterarte de próximos eventos. 
  Además los otros participantes podran dar puntuacion 
  de tus publicaciones y para así ser el jugador con más experiencia .
  </p>
</div>
<div class="items price">
<p class="old "></p>
<p class="new"></p>
</div>
<div class="items cart">
<i class="fab fa-instagram"></i>
<span>  <a href="https://github.com/vero688/SCL012-Social-Network" 
      className="btn btn-warning text-white">Github</a></span>
        <span>  <a href="" 
      className="btn btn-warning text-white">Proyecto</a></span>
</div>
</div>
</div>

</div>
</div>
);
    
}

export default Proyec;

















      
   




 














