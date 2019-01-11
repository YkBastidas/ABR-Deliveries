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
        {console.log('props form link',this.props.location.param1)}
        {console.log('props form link',this.props.location.param2)}
        <PackagesContainer salida={this.props.location.param1} llegada={this.props.location.param2}/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Packages
