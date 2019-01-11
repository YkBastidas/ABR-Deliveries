import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    }
    this.logOut=this.logOut.bind(this);
  }

  logOut () {
    console.log('Cerrando sesion')
    axios.get('/auth/logout',{withCredentials: true
    })
  .then((res)=> {
    // handle success
   // this.props.history.push('/perfil');
   console.log('Sesion cerrada');
   this.props.isLoggedIn();

  })
  .catch(function (error) {
    // handle error
    console.log('axios');
    console.log(error);
  })

  }
  render() {
    return (<nav>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className={
            this.state.active === "profile" ? "nav-link active" : "nav-link"
          }
             to="/perfil">
            Mi Perfil
          </Link>
        </li>
        <li className="nav-item">
          <Link className={
              this.state.active === "delivery" ? "nav-link active" : "nav-link"
            }
            to="/entregas/">
            Nuevo Pedido
          </Link>
        </li>
        <li className="nav-item">
          <Link className={
              this.state.active === "history" ? "nav-link active" : "nav-link"
            } to="/historial/">
            Historial
          </Link>
        </li>
        <li className="nav-item">

        <Link className={
            this.state.active === "eliminar" ? "nav-link active" : "nav-link"
          } to="/eliminar/">
          Eliminar Entrega
        </Link>

        <Link className="nav-link" to="/" onClick={()=> this.logOut()}>
            Cerrar Sesión
        </Link>
        </li>
      </ul>
    </nav>)
  }
}

export default Menu
