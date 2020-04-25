import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './componentes/Home';
import Proyect from './componentes/Proyect';
import New from './componentes/New';


function App() {
  return (
    <BrowserRouter>
    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/badges" component={Proyect} />
          <Route  path="/badges/new" component={New} />
        </Switch>
    
    </BrowserRouter>
  );
}

export default App;
