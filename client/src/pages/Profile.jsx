import React, {Component} from 'react';

import ProfileContainer from '../containers/ProfileContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import '../containers/MainWindow.css';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {nombre: '', correo:'', apellido: ''},
      isLoggedIn:false
    }

    this.isLoggedIn = this.isLoggedIn.bind(this);
  }
  
  componentWillMount() {

    axios.get('/user/info',{withCredentials: true
    })
  .then((res)=> {
    // handle success
    console.log('Callback Axios con Data del Usuario');
    console.log(res.data);
    this.setState({user: res.data, isLoggedIn:true});
    
  })
  .catch(function (error) {
    // handle error
    console.log('axios');
    console.log(error);
  });

  }

  isLoggedIn() {
    this.setState({isLoggedIn:false});
  }
  render() {

    if (this.state.isLoggedIn){
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <ProfileContainer user={this.state.user} isLoggedIn={this.isLoggedIn}/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);}
    else {
      return (
        <div></div>
      );
    }
  }
}

export default Profile
