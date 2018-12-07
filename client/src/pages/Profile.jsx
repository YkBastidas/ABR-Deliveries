import React, {Component} from 'react';

import UserContainer from '../containers/UserContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import '../containers/MainWindow.css';

class Profile extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <UserContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Profile
