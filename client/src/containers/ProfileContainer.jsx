import React, {Component} from 'react';
//import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import Menu from '../components/Menu'
axios.defaults.withCredentials = true;

export default class ProfileContainer extends Component {
 
  render() {
     
    return (
     
      <section className = "main row align-items-center" >
      <div className = "sideLeft col-xs-12 col-sm-10" >
      <div key={this.props.user.nombre}>  
                <div>
                  <div>Nombre: {this.props.user.nombre + ' ' + this.props.user.apellido}</div>
                  <div>Correo: {this.props.user.correo}</div>
                </div>
  
        </div>
      </div>
       <div className = "sideRight col-xs-12 col-sm-2" >
      <Menu active = 'profile' isLoggedIn={this.props.isLoggedIn}/>
      </div>
      </section >
    );
  }

}
