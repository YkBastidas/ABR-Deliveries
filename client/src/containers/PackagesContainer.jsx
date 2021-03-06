import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

/* Import Components */
import Number from '../components/Number';
import Button from '../components/Button';
import TextArea from '../components/TextArea';
import Input from '../components/Input';
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
        name: "",
        lastNames: "",
        salida: this.props.salida,
        llegada: this.props.llegada
      }
    };

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleNames = this.handleNames.bind(this);

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

  handleNames(e){
    let value = e.target.value;
    let name =e.target.name;
    this.setState(prevState => ({
      directions: {
        ...prevState.directions,
        [name]: value
      }
    }), () => console.log(this.state.directions));
  }

  handleSubmit(e) {
    e.preventDefault();
    let packageData = this.state.newPackage;
    let directionsData = this.state.directions;

    axios.post('/entregas/guardar', {
      peso: packageData.peso,
      altura: packageData.altura,
      ancho: packageData.ancho,
      descripcion: packageData.descripcion,
      name: directionsData.name,
      lastNames: directionsData.lastNames,
      salida: directionsData.salida,
      llegada: directionsData.llegada
    }).then( (response)=> {
      // handle success
      console.log(response);
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
      },
      directions: {
        name: "",
        lastNames: "",
        salida: this.props.salida,
        llegada: this.props.llegada
      }
    }, () => console.log(this.state));
  }

  render() {
    return (
      <section className = "main row align-items-center" >
        <div className = "sideLeft col-sm-12" >
          <h2> Datos del Paquete</h2>
          <form onSubmit={this.handleSubmit} className="needs-validation" id="formPackages">

            <div className="form-group">
              <Input title={"Nombre del Destinatario"} name={"name"} inputtype={"text"} value={this.state.directions.name} handlerChange={this.handleNames} placeholder={"Ingresa el nombre del destinatario"}/>{" "}
            </div>

            <div className="form-group">
              <Input title={"Apellido del Destinatario"} name={"lastNames"} inputtype={"text"} value={this.state.directions.lastNames} handlerChange={this.handleNames} placeholder={"Ingresa el apellido del destinatario"}/>{" "}
            </div>

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
