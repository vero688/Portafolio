import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contacto  from './componentes/Proyectos';
import Home from './componentes/Home';
import './style/Navbar.css';

function App() {
    return (
        <Fragment>
            <Router>
                <div>
                    
                 <div className="Navbar">
                    <div className="container-fluid">
                    <Link to="/" className="nav-link">Home</Link>
                 <Link to="/Contacto" className="nav-links">Proyectos</Link>
                   </div>
                   </div>
                </div>

                <Route exact path="/" component={Home} />
                <Route path="/contacto" component={Contacto}/>
                

            </Router>
        </Fragment>
    );
}

export default App;
