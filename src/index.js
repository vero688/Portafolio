import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import New from './componentes/New';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <React.StrictMode>
      <New />
    </React.StrictMode>,
    document.getElementById('root')
  );

serviceWorker.unregister();




