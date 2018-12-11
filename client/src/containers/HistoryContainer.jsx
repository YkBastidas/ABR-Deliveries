import React, {Component} from 'react';
import Menu from '../components/Menu'
import axios from 'axios';

class HistoryContainer extends Component {

  render() {

    const mapStyle = {
      height: '40em',
      width: 'auto'
    };

    return (<section className="main row align-items-center">
      <div className="sideLeft col-xs-12 col-sm-10">
        <div id="map" style={mapStyle}></div>
      </div>
      <div className="sideRight col-xs-12 col-sm-2">
        <Menu active='history'/>
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
      zoom: 5,
      zoomControl: false
    });

    map.addControl(mapquest.control());

    const getHistory = async () => {
      try {
        const marks = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson')
        console.log(marks.data);
        window.L.geoJSON(marks.data).addTo(map);

      } catch (error) {
        console.error(error)
      }
    }
    getHistory();
  }

}

export default HistoryContainer
