import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import Menu from '../components/Menu'
axios.defaults.withCredentials = true;

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {nombre: 'foo', correo:'bar'}
    }
  }
  render() {
    return (
      <section className = "main row align-items-center" >
      <div className = "sideLeft col-xs-12 col-sm-10" >
      <div key={this.state.user.nombre}>  
                <div>
                  <div>Nombre: {this.state.user.nombre}</div>
                  <div>Correo: {this.state.user.correo}</div>
                </div>
  
        </div>
      </div>
       <div className = "sideRight col-xs-12 col-sm-2" >
      <Menu active = 'profile' />
      </div>
      </section >
    );
  }

  componentDidMount() {

    axios.get('/user/info',{withCredentials: true
    })
  .then((res)=> {
    // handle success
    console.log('Callback Axios con Data del Usuario');
    console.log(res.data);
    this.setState({user: res.data})

  })
  .catch(function (error) {
    // handle error
    console.log('axios');
    console.log(error);
  })
  
  }
}
