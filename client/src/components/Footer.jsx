import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return(
      <footer className="row">
        <div className="col-xs 12 col-sm 3">
           <h3> Contacto</h3>
           <p>
              <a href="#!"> > 0501-ABRDELI</a>
              <br/>
              <a href="#!"> > 0501-2279954</a>
              <br/>
              <a href="#!"> > soporteabr@abr.deliveries</a>
           </p>
        </div>
        <div className="col-xs 12 col-sm 3">
           <h3> Información </h3>
              A.B.R. Deliveries @ 2018 <br/>
            <a href="#!"> > Sobre nosotros</a> <br/>
              <a href="#!"> > Trabaja aquí</a>
        </div>
        <div className="col-xs 12 col-sm 3">
           <h3> Comunidad </h3>
           <a href="#!">
              <img src={require('../images/facebook-logo.png')} alt="Facebook"/>
           </a>
           &nbsp; &nbsp;
           <a href="#!">
             <img src={require('../images/instagram-symbol.png')} alt="Instagram"/>
           </a>
           &nbsp; &nbsp;
           <a href="#!">
             <img src={require('../images/youtube.png')} alt="Youtube"/>
           </a>
        </div>
      </footer>
    )
  }
}

export default Footer
