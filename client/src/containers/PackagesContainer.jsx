import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

/* Import Components */
import Number from '../components/Number';
import Button from '../components/Button';
import TextArea from '../components/TextArea';

import './FormContainer.css';

class PackagesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPackage: {
        peso: "",
        altura: "",
        ancho: "",
        descripcion: "",
      },
      directions: {
        salida: this.props.salida,
        llegada: this.props.llegada
      }
    };

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleNumber = this.handleNumber.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);


  }

  handleTextArea(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newPackage: {
        ...prevState.newPackage,
        descripcion: value
      }
    }), () => console.log(this.state.newPackage));
  }

  handleNumber(e){
    let value = e.target.value;
    let name =e.target.name;
    this.setState(prevState => ({
      newPackage: {
        ...prevState.newPackage,
        [name]: value
      }
    }), () => console.log(this.state.newPackage));
  }

  handleSubmit(e) {
    e.preventDefault();
    let packageData = this.state;
      axios({
        method: "POST",
        url: '/entregas/guardar',
        body: JSON.stringify(packageData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        response.json().then(data => {
          console.log("Successful" + data);
        }).catch(response => {
          //handle error
          console.log(response);
        });
      });
    return true;
  }
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newPackage: {
        peso: "",
        altura: "",
        ancho: "",
        descripcion: ""
      }
    }, () => console.log(this.state.newPackage));
  }

  render() {
    return (
      <section className = "main row align-items-center" >
        <div className = "sideLeft col-sm-12" >
          <h2> Datos del Paquete</h2>
          <form onSubmit={this.handleSubmit} className="needs-validation" id="formPackages">

            <div className="form-group">
              <Number title={"Peso (Kg):"} name={"peso"} inputtype={"number"} min= {"0.01"} max= {"999,99"} step = {".01"} value={this.state.newPackage.peso} handlerchange={this.handleNumber} placeholder={"0.01 ~ 999.99"}/>{" "}
            </div>

            <div className="form-group">
              <Number title={"Altura (cm):"} name={"altura"} inputtype={"number"} min= {"0.01"} max= {"999.99"} step = {".01"} value={this.state.newPackage.altura} handlerchange={this.handleNumber} placeholder={"0.01 ~ 999.99"}/>{" "}
            </div>

            <div className="form-group">
              <Number title={"Ancho (cm):"} name={"ancho"} inputtype={"number"} min= {"0.01"} max= {"999.99"} step = {".01"} value={this.state.newPackage.ancho} handlerchange={this.handleNumber} placeholder={"0.01 ~ 999.99"}/>{" "}
            </div>

            <div className="form-group">
              <TextArea title={"Descripción"} name={"description"} form={"formPackages"} value={this.state.newPackage.descripcion} handlerchange={this.handleTextArea} placeholder={"Ingresa la descripcion"}/>{" "}
            </div>

            {/*this.props.handleSubmit*/}
            <Button
              action={console.log(this.state.newPackage)}
              type={"primary"}
              title={"Guardar Paquete"}
              buttonStyle={
                {
                  margin: "10px 10px 10px 10px"
                }
              }
            />{" "}
            <Button
              action={this.handleClearForm}
              type={"warning"}
              title={"Restaurar"}
              buttonStyle={
                {
                  margin: "10px 10px 10px 10px"
                }
              }
            />
            <Link to ="/entregas">
              <Button
                type={"danger"}
                title={"Regresar"}
                buttonStyle={
                  {
                    margin: "10px 10px 10px 10px"
                  }
                }
              />
            </Link>
            {" "}
          </form>
        </div>
      </section >
    );
  }

}

export default PackagesContainer
