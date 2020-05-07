import React from 'react';
import '../style/Contacto.css';


function Contacto() {
  return (
    
      <div className="container-Cont" id="section4">
          <div className="container-h1">
              <h3 className="text-center">Contactame
              <br/>
              Puedes contactarme en:</h3>
          </div>
          <div className="container-card">
 <div className="img-Contac div1">
 <a  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl" >
                      <img
                      src={require("../icons/gmail-icon.svg")}
                      className="ico-Gmail"/>
                  
                     </a>
                    </div>
                  
 <div className="img-Contac div2">
   <a className="w-100" href="https://github.com/vero688" >
                      <img 
                      src={require("../icons/github-1.svg")}
                      className="ico-Github"
                     />
                  
                      </a>
                      </div>
                      <div className="img-Contac">
   <a  href="https://www.linkedin.com/in/veronica-urrutia/" >
                      <img 
                      src={require("../icons/linkedin-icon-2.svg")}
                      className="ico-Link"
                     />
                    
                      </a>
                      </div>
                      </div>
                    </div>
  )
}
export default Contacto;