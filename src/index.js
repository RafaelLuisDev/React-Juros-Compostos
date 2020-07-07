import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import M from 'materialize-css';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
    M.AutoInit()
);
