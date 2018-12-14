import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Button from '../components/Button';
import Menu from '../components/Menu';

class DeliveryContainer extends Component {

  /* handleSendDirections(e){
    e.preventDefault();
    let directionsData = '' ;
    let validation = validateDirections();
    if (validation === true) {
      axios({
        method: "GET",
        url: '/perfil',
        body: JSON.stringify(userData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        response.json().then(data => {
          console.log("Successful" + data);
        }).catch(response => {
          //handle error
          console.log(response);
        });
      });
    } else {
      console.log("Not Validated");
    }
    return validation;
  }
*/
  render() {

    const mapStyle = {
      height: '40em',
      width: 'auto'
    };

    const buttonStyle = {
      position: 'absolute',
      zIndex: '3000',
      top: '85%',
      left: '80%'
    };

    return (<section className="main row align-items-center">
      <div className="sideLeft col-xs-12 col-sm-10">
        <Link to ="/paquetes">
          <Button
            action={""}
            type={"primary"}
            title={"Paquetes"}
            buttonStyle={buttonStyle}/>
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

    mapquest.key = 'xuikGnFkecGmfa6wyQ2wkE5n0OGBCnAz';
    mapquest.open = false;

    var map = mapquest.map('map', {
      center: [
        10.463251, -66.975403
      ],
      layers: mapquest.tileLayer('map'),
      zoom: 10,
      zoomControl: false
    });

    map.addControl(mapquest.control());

    mapquest.directionsControl({
      directionsLayer: {
        startMarker: {
          draggable: true,
          icon: 'marker-start',
          iconOptions: {}
        },
        endMarker: {
          draggable: true,
          icon: 'marker-end',
          iconOptions: {}
        }
      },
      startInput: {
        compactResults: true,
        disabled: false,
        location: {},
        placeholderText: 'Dirección de Recogida',
        geolocation: {
          enabled: true
        }
      },
      endInput: {
        compactResults: true,
        disabled: false,
        location: {},
        placeholderText: 'Dirección de Entrega',
        geolocation: {
          enabled: true
        }
      },
      addDestinationButton: {
        enabled: false,
        maxLocations: 2
      },
      routeTypeButtons: {
        enabled: false
      },
      reverseButton: {
        enabled: true
      },
      optionsButton: {
        enabled: true
      },
      routeSummary: {
        enabled: false,
        compactResults: false
      },
      narrativeControl: {
        enabled: false,
        compactResults: false,
        interactive: false
      }
    }).addTo(map);

  }
}

export default DeliveryContainer
