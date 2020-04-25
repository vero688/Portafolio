import React from'react';
import '../style/Skills.css';

export function Skills(){
          
                return (
                  <div>
            
              <div className="containerSki">
                <div
                className="Skills">
                    <h2> Skills</h2>
                  <div
                  className="imgSkills">
                    <div className="img-Skills">
                      <img
                      src={require("../icons/js.jpeg")}
                      className="ico-js"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/css.jpeg")}
                      className="ico-css"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/bostrap.jpeg")}
                      className="ico-boost"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/firebase.jpeg")}
                      className="ico-fire"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/git.jpeg")}
                      className="ico-git"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/github.jpeg")}
                      className="ico-github"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/html.jpeg")}
                      className="ico-html"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/Lin.jpeg")}
                      className="ico-lin"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/react.jpeg")}
                      className="ico-react"/>
                    </div>

                  </div>

                </div>
                
              </div>
                  </div>
                );
              }
            
            
export default Skills;