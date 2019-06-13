import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router } from 'react-dom';

import './index.css';
 
import App from './App';
import AppRoutes from './routes';
 
import * as serviceWorker from './serviceWorker';


ReactDOM.render
(
    <router>
        <AppRoutes />
    </router>,
 document.getElementById('root')
);


serviceWorker.unregister();
