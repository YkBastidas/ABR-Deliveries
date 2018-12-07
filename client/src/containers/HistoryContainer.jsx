import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class HistoryContainer extends Component {
  render() {
    return (<section className="main row align-items-center">
      <div className="sideLeft col-xs-12 col-sm-10"></div>
      <div className="sideRight col-xs-12 col-sm-2">
        <nav>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link className="nav-link" to="/signin">
                Mi Perfil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entrega/">Nuevo Pedido</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/historial/">Historial</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Cerrar Sesión</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>);
  }
}

export default HistoryContainer
