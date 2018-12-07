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
    axios({
      method:"GET",
      url:"https://jsonplaceholder.typicode.com/users",
    }).then((response)=>{
      console.log(response.data);
      this.setState({
        userList:response.data
      })
    })
  }
  displayUsers(){
    return this.state.userList.map( user => {
      return(
        <div key={user.name}>
          {
            user.id === 1 ?
                <div>
                  <div className="username">Name: {user.name}</div>
                  <div className="username">Email: {user.email}</div>
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
