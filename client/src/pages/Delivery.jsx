import React, {Component} from 'react';

import DeliveryContainer from '../containers/DeliveryContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import '../containers/MainWindow.css';

class Delivery extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <DeliveryContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Delivery
