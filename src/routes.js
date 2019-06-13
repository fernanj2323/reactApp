import React from 'react';
import { Route, Switch } from 'react-dom';

import App from './App';
import loggedIn from './components/loggedIn.js';
import dontLoggedIn from './components/dontLoggedIn.js';
import HOTPcode from './components/HOTPcode';

const AppRoutes = () =>
<App> 
     <Switch>
        <Route path ="/" component={App} />
        <Route path ="/loggedIn" component={loggedIn} />
        <Route path ="/dontLoggedIn" component={dontLoggedIn} />
        <Route path ="/HOTPcode" component={HOTPcode} />
    </Switch>
</App>

export default AppRoutes; 