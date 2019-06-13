import React, { Component } from 'react'; 
import fire from '../fire.svg';
import { render } from 'react-dom'; 

class DontLoggedIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }
  
    render() {
      
        return (
            <div className="FullLogin">
            <content className="App-content"> 
            <div className="header">
              <img src={fire} className="App-logo" ></img>
              <div className="login">
              DONTLogin
             </div>
      
             </div>
            <form  onSubmit={this.handleSubmit}>  
            <div className="form-groupEmail">
             
              <input type="email" className="form-control" id="Email" placeholder="Email"  />
              </div>
              <div className="form-groupPass2 " for="invalidCheck3">
        
              <input type="password" className="form-control is-invalid" id="Password" placeholder="Password"  ></input>
              </div>
         
            </form>
            <button type="submit" className="btn btn-primary">login</button>
            </content>
            <footer>
              <div className="simpletext">
                is simply text of the printing and typesetting industry. Lorem impsum has
              </div>
            </footer>
           
            </div>
        )  
                  
    }
}

export default DontLoggedIn; 