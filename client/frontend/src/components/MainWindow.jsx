import React, {Component} from 'react';
import './MainWindow.css';
import SideLeft from './SideLeft.jsx';
import SideRight from './SideRight.jsx';

class MainWindow extends Component{
  render(){
    return(
      <section className="main row">
        <div className="sideLeft col-xs-12 col-sm-6">
        <SideLeft/>
        </div>
        <div className="sideRight col-xs-12 col-sm-6">
        <SideRight/>
        </div>
      </section>
    )
  }
}

export default MainWindow
