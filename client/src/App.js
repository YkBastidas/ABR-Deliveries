import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Profile from './pages/Profile'
import Delivery from './pages/Delivery'
import History from './pages/History'


class App extends Component {
  render() {
    return (<Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/signin/" component={Profile}/>
        <Route path="/entrega/" component={Delivery}/>
        <Route path="/historial/" component={History}/>
      </div>
    </Router>);
  }
}

export default App;
