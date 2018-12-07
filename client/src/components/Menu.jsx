import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    }
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
            to="/entrega/">
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
          <Link className="nav-link" to="/">
            Cerrar Sesión
          </Link>
        </li>
      </ul>
    </nav>)
  }
}

export default Menu
