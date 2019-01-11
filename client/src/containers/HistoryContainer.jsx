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
    mapquest.geocoding().geocode(['10.464519, -66.975050', '10.343291, -66.991196', '10.409482, -66.488571'], createMap);

    function createMap(error, response) {
          // Initialize the Map
          var map = mapquest.map('map', {
            layers: mapquest.tileLayer('map'),
            center: [10.463251, -66.975403],
            zoom: 5,
            zoomControl: false
          });

          // Generate the feature group containing markers from the geocoded locations
          var featureGroup = generateMarkersFeatureGroup(response);

          // Add markers to the map and zoom to the features
          featureGroup.addTo(map);
          map.fitBounds(featureGroup.getBounds());
          map.addControl(mapquest.control());
    }

    function generateMarkersFeatureGroup(response) {
          var group = [];
          for (var i = 0; i < response.results.length; i++) {
            var location = response.results[i].locations[0];
            var locationLatLng = location.latLng;

            // Create a marker for each location
            var marker = window.L.marker(locationLatLng, {icon: mapquest.icons.marker()})
              .bindPopup(location.adminArea5 + ', ' + location.adminArea3);

            group.push(marker);
          }
          return window.L.featureGroup(group);
        }

  }

}

export default HistoryContainer
