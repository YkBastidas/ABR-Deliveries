import React, {Component} from 'react';

class Banner extends Component{
  render(){
    return(
      <div className="row align-items-center">
        <div className="col-xs-1 col-md-2 offset-md-2 col align-self-center">
            <img src={require('../images/logoColorABR.png')} alt="Logotipo ABR Deliveries" width="150"/>
        </div>
        <div className="col-xs-11 col-md-5 offset-md-3 col align-self-center">
            <h1> A.B.R. Deliveries <br/> Tu Envío Seguro </h1>
        </div>
      </div>
    )
  }
}

export default Banner
