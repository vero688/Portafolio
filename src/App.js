import React from 'react';
import Home from './componentes/Home';
import Proyect from './componentes/Proyect';
import Skills from './componentes/Skills';

import {   BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
  
          <Route exact path="/" component={Home} />
          <Route  path="/Skills" component={Skills} />
          <Route  path="/Proyect" component={Proyect} />
   
    
    </Router>
  );
}

export default App;
