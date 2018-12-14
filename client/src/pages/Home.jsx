import React, {Component} from 'react';
import './Home.css';
import MainWindow from '../containers/MainWindow.jsx';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Home extends Component{
   render(){
      return(
        <div>
          <header>
            <div className="container">
               <Banner/>
            </div>
          </header>
          <br/>
          <div className= "container">
            <MainWindow />
          </div>
          <br/>
          <div className="container-fluid">
            <Footer/>
          </div>
        </div>
      );
   }
}

export default Home
