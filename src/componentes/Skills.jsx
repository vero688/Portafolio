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
                      src={require("../icons/javascript.svg")}
                      className="ico-js"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/css3.svg")}
                      className="ico-css"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/bootstrap-4.svg")}
                      className="ico-boost"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/firebase-1.svg")}
                      className="ico-fire"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/git-icon.svg")}
                      className="ico-git"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/github-1.svg")}
                      className="ico-github"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/html-5.svg")}
                      className="ico-html"/>
                    </div>
                    <div className="img-Skills">
                      <img
                      src={require("../icons/react.svg")}
                      className="ico-react"/>
                    </div>

                  </div>

                </div>
                
              </div>
                  </div>
                );
              }
            
            
export default Skills;