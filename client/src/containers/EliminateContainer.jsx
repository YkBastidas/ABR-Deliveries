import React, {Component} from 'react';
//import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import Menu from '../components/Menu'
import Button from '../components/Button'


export default class EliminateContainer extends Component {
  handleEliminate(e){
    e.preventDefault();
    let deliverId = this.props.deliveries.id;
    axios.post('/deliver/eliminate', {
      id_entrega: deliverId,
    }).then( (response)=> {
      // handle success
      console.log(response);

    })
    .catch(function (error) {
      // handle error
      console.log('No eliminó');
      console.log(error);
    });
  }

  render() {

    return (

      <section className = "main row align-items-center" >
      <div className = "sideLeft col-xs-12 col-sm-10" >
        <div>
          <ul style = {
            {
              "list-style-type": "none",
              "margin-top" : ".8em"
            }
          }
            >
            { this.props.deliveries.map(deliver =>
              <li style = {
                {
                  "background": "rgba(235,228,222,.87)",
                  "margin-top" : ".8em",
                  "padding-left" : ".5em"
                }
              }>
                {deliver.nombreEntrega + " " + deliver.apellidoEntrega}
                <br/>
                {'Direccion Entrega: ' + deliver.direccion_entrega.latitud + ' , ' + deliver.direccion_entrega.longitud}
                <br/>
                {'Direccion Recogida: ' + deliver.direccion_recogida.latitud + ' , ' + deliver.direccion_recogida.longitud}
                <br/>
                <Button
                  action= {this.handleEliminate}
                  type={"warning"}
                  title={"Eliminar"}
                  buttonStyle={
                    {
                      "margin-top": ".8em",
                      "margin-bottom": ".8em"
                    }
                  }
                />
              </li>
            )
            }
          </ul>
        </div>
      </div>
      <div className = "sideRight col-xs-12 col-sm-2" >
      <Menu active = 'eliminar'/>
      </div>
      </section >
    );
  }

}
