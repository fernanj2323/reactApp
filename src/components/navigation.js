import React, { Component } from 'react'; 

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar  ">  
                 <a href="" className="text-white">

                 {

                     this.props.titulo
                 }
                 </a>
            </nav>
        )
    }
}

export default Navigation; 