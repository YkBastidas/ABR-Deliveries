import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Button from '../components/Button';
import Radio from '../components/Radio';
import Menu from '../components/Menu';

class DeliveryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      directions: {
        salida: "",
        llegada: ""
      }
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
     this.setState((prevState,props) => ({
       salida: document.getElementById('salidaText').innerHTML
     }));

     this.setState((prevState,props) => ({
       llegada: document.getElementById('llegadaText').innerHTML
     }),() => {
       console.log(this.state);
     });

   }

  render() {

    const newTo = {
      pathname: "/paquetes",
      param1: this.state.salida,
      param2: this.state.llegada
    };

    const mapStyle = {
      height: '40em',
      width: 'auto'
    };

    const labelStyle = {
      background: 'chartreuse'
    }

    const buttonStyle = {
      position: 'absolute',
      zIndex: '3000',
      top: '85%',
      left: '80%'
    };

    const buttonStyle2 = {
      position: 'absolute',
      zIndex: '3000',
      top: '85%',
      left: '60%'
    };

    const llegadaStyle = {
      position: 'absolute',
      top: '85%',
      left: '20%',
      zIndex: '3000',
      width: '1.5em'
    };

    const salidaStyle = {
      position: 'absolute',
      top: '85%',
      left: '5%',
      zIndex: '3000',
      width: '1.5em'
    }

    return (
      <section className="main row align-items-center">
      <div className="sideLeft col-xs-12 col-sm-10">
        Salida: <label id = 'salidaText'>  </label> <br/>
        Llegada: <label id = 'llegadaText'>  </label>
      <Radio onClick={this.onClick} inputtype={"radio"} id={"llegada"} name={"direccion"} inputstyle={llegadaStyle} labelstyle={labelStyle} />
        <Radio onClick={this.onClick} inputtype={"radio"} id={"salida"} name={"direccion"} labelstyle={labelStyle} inputstyle={salidaStyle} defaultChecked/>
        <Button action ={this.onClick} type={"primary"} title={"Confirmar"} buttonStyle={buttonStyle2}/>
        <Link to= {newTo}>
          <Button type={"primary"} title={"Paquetes"} buttonStyle={buttonStyle}/>
        </Link>

        <div id="map" style={mapStyle}></div>

      </div>
      <div className="sideRight col-xs-12 col-sm-2">
        <Menu active='delivery'/>
      </div>
    </section>);
  }

  componentDidMount() {

    const mapquest = window.L.mapquest;
    const L = window.L

    var latLng = new L.LatLng(10.4645175, -66.97626114);
    mapquest.key = 'xuikGnFkecGmfa6wyQ2wkE5n0OGBCnAz';
    mapquest.open = false;

    var map = L.map('map', {
      center: latLng,
      layers: mapquest.tileLayer('map'),
      zoom: 10,
      zoomControl: false
    }).on('click', function(e) { //en un click haz lo siguiente manejador de eventos
      if (document.getElementById('salida').checked) {
        document.getElementById('salidaText').innerHTML = addMarker(e);
      } else {
        document.getElementById('llegadaText').innerHTML = addMarker2(e);
      };
    });

    map.addControl(mapquest.control());


    var startMarker = L.icon({
      iconUrl: 'https://assets.mapquestapi.com/icon/v2/flag-start.png',
      iconRetinaUrl: 'https://assets.mapquestapi.com/icon/v2/flag-start@2x.png',
    });

    var endMarker = L.icon({
      iconUrl: 'https://assets.mapquestapi.com/icon/v2/flag-end.png',
      iconRetinaUrl: 'https://assets.mapquestapi.com/icon/v2/flag-end@2x.png',
    });

    var popup = L.marker(latLng, {
      icon: startMarker,
      draggable: true
    }).bindPopup("{ primaryColor: '#417505', secondaryColor: '#e3d319'}"); //creamos el popup para colocar las señales

    var popup2 = L.marker(latLng, {
      icon: endMarker,
      draggable: true
    }); //creamos el popup para colocar las señales

    L.marker(latLng, {
      icon: mapquest.icons.marker({
        primaryColor: '#417505',
        secondaryColor: '#e3d319',
        shadow: true,
        size: 'md'
      }),
      draggable: false
    });

    function addMarker(e) {
      popup.setLatLng(e.latlng).addTo(map).bindPopup(e.latlng.toString());
      alert(e.latlng);
      return e.latlng
    }

    function addMarker2(e) {
      popup2.setLatLng(e.latlng).addTo(map).bindPopup(e.latlng.toString());
      alert(e.latlng);
      return e.latlng
    }
  }

}

export default DeliveryContainer
