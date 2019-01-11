import React, {Component} from 'react';

import EliminateContainer from '../containers/EliminateContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import '../containers/MainWindow.css';
import axios from 'axios';

var data = [
  {
    "id": 1,
    "nombreEntrega": "Leanne",
    "apellidoEntrega": "Graham",
    "direccion_recogida": {
      "latitud":"10.477644",
      "longitud":"-66.952477"
    },
    "direccion_entrega": {
      "latitud":"10.464519",
      "longitud":"-66.975050"
    }
  },
  {
    "id": 2,
    "nombreEntrega": "Petro",
    "apellidoEntrega": "Nila",
    "direccion_recogida": {
      "latitud":"10.477644",
      "longitud":"-66.952477"
    },
    "direccion_entrega": {
      "latitud":"10.464519",
      "longitud":"-66.975050"
    }
  },
  {
    "id": 3,
    "nombreEntrega": "Elba",
    "apellidoEntrega": "Lazo",
    "direccion_recogida": {
      "latitud":"10.477644",
      "longitud":"-66.952477"
    },
    "direccion_entrega": {
      "latitud":"10.464519",
      "longitud":"-66.975050"
    }
  }
];

class Eliminate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveries: []
    }
  }

/*  componentWillMount() {

  axios.get('/deliver/info')
  .then((res)=> {
    // handle success
    console.log('Callback Axios con Data de la Entrega');
    console.log(res.data);
    const deliveries = res.data;
    this.setState({deliveries});

  })
  .catch(function (error) {
    // handle error
    console.log('axios');
    console.log(error);
  });

  } */

  isLoggedIn() {
    this.setState({isLoggedIn:false});
  }

  render() {

    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <EliminateContainer deliveries={data} />
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Eliminate
