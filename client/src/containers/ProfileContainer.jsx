import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import Menu from '../components/Menu'

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    }
  }
  render() {
    return (
      <section className = "main row align-items-center" >
      <div className = "sideLeft col-xs-12 col-sm-10" >
        {this.displayUsers()}
      </div>
       <div className = "sideRight col-xs-12 col-sm-2" >
      <Menu active = 'profile' />
      </div>
      </section >
    );
  }

  componentDidMount() {
    this.getAllUser();
  }
  getAllUser(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      console.log(response.data);
      this.setState({
        userList:response.data
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  displayUsers(){
    return this.state.userList.map( user => {
      return(
        <div key={user.name}>
          {
            user.id === 1 ?
                <div>
                  <div>Nombre: {user.name}</div>
                  <div>Correo: {user.email}</div>
                </div>
            :
            ""
          }
        </div>
        );
    })
  }
}

export default ProfileContainer
