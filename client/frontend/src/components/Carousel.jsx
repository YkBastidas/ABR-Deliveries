import React, {Component} from 'react';
import './Carousel.css';
import slider1 from '../images/slider1.png'
import slider2 from '../images/slider2.png'
import slider3 from '../images/slider3.png'
import slider4 from '../images/slider4.png'
import slider5 from '../images/slider5.png'

class Carousel extends Component{
  render(){
    return(
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-pause="hover">

         {/* Indicators*/}
         <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
         </ol>

         {/*Slide's Container*/}
         <div className="carousel-inner">
            <div className="carousel-item active">
               <img className="d-block w-100" src={slider1} alt="First slide"/>
            </div>
            <div className="carousel-item">
               <img className="d-block w-100" src={slider2} alt="Second slide"/>
            </div>
            <div className="carousel-item">
               <img className="d-block w-100" src={slider3} alt="Third slide"/>
            </div>
            <div className="carousel-item">
               <img className="d-block w-100" src={slider4} alt="Forth slide"/>
            </div>
            <div className="carousel-item">
               <img className="d-block w-100" src={slider5} alt="Fifth slide"/>
            </div>
         </div>

         {/*Carousel's arrow buttons*/}
         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
         </a>
         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
         </a>
      </div>
    )
  }
}

export default Carousel
