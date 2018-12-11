import React, {Component} from 'react';

import ProfileContainer from '../containers/ProfileContainer';
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
        <ProfileContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Profile
