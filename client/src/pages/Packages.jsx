import React, {Component} from 'react';

import PackagesContainer from '../containers/PackagesContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import '../containers/MainWindow.css';

class Packages extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <PackagesContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Packages
