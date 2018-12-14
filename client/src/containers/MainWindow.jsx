import React, {Component} from 'react';
import './MainWindow.css';
import Carousel from '../components/Carousel';
import FormContainer from './FormContainer';

class MainWindow extends Component{
  render(){
    return(
      <section className="main row align-items-center">
        <div className="sideLeft col-xs-12 col-sm-6">
        <Carousel/>
        </div>
        <div className="sideRight col-xs-12 col-sm-6">
        <FormContainer/>
        </div>
      </section>
    )
  }
}

export default MainWindow
