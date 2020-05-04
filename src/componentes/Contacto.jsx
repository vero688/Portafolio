import React from 'react';
import '../style/Contacto.css';


function Contacto() {
  return (
    
      <div className="container-Cont">
          <div>
              <h1>TRABAJEMOS JUNTOS</h1>
          </div>
 <div className="img-Contac"  id="section4">
 <a  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl" >
                      <img
                      src={require("../icons/gmail-icon.svg")}
                      className="ico-Gmail"/>
                     </a>
                    </div>
                  
 <div className="img-Contac">
   <a  href="https://github.com/vero688" >
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
  )
}
export default Contacto;