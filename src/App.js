
import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation';
import Login from './components/login';
import DontLoggedIn from './components/dontLoggedIn';


import { logStatus } from './logStatus.json'; 

console.log (logStatus);

class App extends Component {

 
  constructor(){
    super();
    this.state = { 
      title: 'LogginPage',
      logStatus:logStatus
    }
  }

 render () {
  console.log ('antes de return');

 const logStatus = this.state.logStatus.map((logStatus, i ) => { //de esta forma hacemos un recorrido para cada logStatus.
    return (
      <div className="card" >
        {logStatus.pass}
      </div> 
    )
  })
  return (
     
    <div className="App">
      <div className="logginPage">
      <title>{this.state.title}</title>
      <header className="App-header">
      <Navigation titulo= {this.state.title} />
      </header>
  
      <Login/> 
      <DontLoggedIn/> 
     
      </div>
    </div>
  );
  }
}

export default App;
