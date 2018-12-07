import React, {Component} from 'react';
import axios from 'axios';
import './FormContainer.css';

/* Import Components */
import Input from '../components/Input';
import Button from '../components/Button';
import DateForm from '../components/DateForm';

function calculateAge(date) {

  var today = new Date();
  var birthday = new Date(date);
  var age = today.getFullYear() - birthday.getFullYear();
  var m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && (today.getDate() < birthday.getDate() + 1))) {
    age--;
  }
  return age;

}
function maxDate() {

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = yyyy + '-' + mm + '-' + dd;
  return today;
};

function validateSignUp() {
  var names,
    lastNames,
    password,
    email,
    bornDate,
    passwordEx,
    emailEx,
    namesEx;

  names = document.getElementById('name').value;
  lastNames = document.getElementById('lastNames').value;
  email = document.getElementById('emailSignUp').value;
  bornDate = document.getElementById('bornDate').value;
  password = document.getElementById('passwordSignUp').value;

  passwordEx = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/
  emailEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  namesEx = /^[A-Za-z_\s].*()[^0-9\W]$/

  if (names === "" || lastNames === "" || email === "" || password === "") {
    alert("Todos los campos son obligatorios");
    return false;
  } else if (!namesEx.test(names)) {
    alert("El nombre es inválido");
    return false;
  } else if (!namesEx.test(lastNames)) {
    alert("El apellido es inválido");
    return false;
  } else if (!passwordEx.test(password)) {
    alert("La contraseña es inválida");
    return false;
  } else if (!emailEx.test(email)) {
    alert("El correo es inválido");
    return false;
  } else if (calculateAge(bornDate) < 18) {
    alert("Debes tener una edad mayor o igual a 18 años para acceder al sistema")
    return false;
  }
  return true;
};
function validateSignIn() {
  var email,
    password,
    emailEx,
    passwordEx;
  email = document.getElementById('emailSignIn').value;
  password = document.getElementById('passwordSignIn').value;
  passwordEx = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/
  emailEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  if (!passwordEx.test(password)) {
    alert("La contraseña es inválida");
    return false;
  } else if (!emailEx.test(email)) {
    alert("El correo es inválido");
    return false;
  }
  return true;
};

class SignIn extends Component {
  render() {
    return (<div>
      <div id="SignIn">
        <h3>
          <button className="btn btn-link" onClick={this.props.onClick}>
            Registrarse
          </button>
          <span id="o">
            &nbsp; o &nbsp;
          </span>
          Iniciar Sesión
        </h3>

      </div>

      <div>

        <form onSubmit={this.props.handleSignInSubmit} className="needs-validation" id="formSignIn">
          <div className="form-group">
            <Input title={"Correo electrónico"} name={"emailSignIn"} inputtype={"email"} value={this.props.email} handlerChange={this.props.handleInput} placeholder={"correo@direcion.ext"}/>{" "}
          </div>

          <div className="form-group">
            <Input title={"Contraseña"} name={"passwordSignIn"} inputtype={"password"} value={this.props.password} handlerChange={this.props.handleInput} placeholder={"Ingrese su contraseña"}/>{" "}
          </div>

          {/* We still have to collect data from the server and send it to the user page after confirming the data */}
          <Button action={this.props.handleSignInSubmit} type={"primary"} title={"Iniciar Sesión"}/>{" "}
        </form>
      </div>
    </div>)
  }
}

class SignUp extends Component {

  render() {
    return (<div>

      <div id="signUp">
        <h3>Registrarse
          <span id="o">
            &nbsp; o &nbsp;
          </span>
          <button className="btn btn-link" onClick={this.props.onClick}>
            Iniciar Sesión</button>
        </h3>
      </div>

      <div>

        <form onSubmit={this.props.handleSignUpSubmit} className="needs-validation" id="formSignUp">

          <div className="form-group">
            <Input title={"Correo electrónico"} name={"emailSignUp"} inputtype={"email"} value={this.props.email} handlerChange={this.props.handleInput} placeholder={"correo@direcion.ext"}/>{" "}
          </div>

          <div className="form-group">
            <Input title={"Nombre(s)"} name={"name"} inputtype={"text"} value={this.props.name} handlerChange={this.props.handleInput} placeholder={"Ingresa tu nombre"}/>{" "}
          </div>

          <div className="form-group">
            <Input title={"Apellido(s)"} name={"lastNames"} inputtype={"text"} value={this.props.lastNames} handlerChange={this.props.handleInput} placeholder={"Ingresa tu apellido"}/>{" "}
          </div>

          <div className="form-group">
            <DateForm title={"Fecha de nacimiento:"} name={"bornDate"} inputtype={"date"} min={"1899-01-01"} max={maxDate()} value={this.props.bornDate} handlerChange={this.props.handleBornDate}/>{" "}
          </div>
          <div className="form-group">
            <Input title={"Contraseña:"} name={"passwordSignUp"} inputtype={"password"} value={this.props.password} handlerChange={this.props.handleInput} placeholder={"Ingresa tu contraseña"}/>{" "}
            <small id="passwordHelpBlock" className="form-text text-muted">
              <b>Tu contraseña debe tener entre 8-20 caracteres, contener por lo menos una letra mayúscula y una minúscula y tener por lo menos 1 caracter especial.
              </b>
            </small>
          </div>
          <Button action={this.props.handleSignUpSubmit} type={"primary"} title={"Crear Cuenta"}/>{" "}
          <Button action={console.log(this.props.newUser)} type={"warning"} title={"Restaurar"}/>{" "}
        </form>
      </div>
    </div>)
  }
}

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        lastNames: "",
        email: "",
        bornDate: "",
        password: ""
      }
    };

    this.handleBornDate = this.handleBornDate.bind(this);

    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      signUpVisible: false
    }
    this.onClick = this.onClick.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  onClick() {
    this.setState(prevState => ({
      signUpVisible: !prevState.signUpVisible
    }))
  }

  handleBornDate(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        bornDate: value
      }
    }), () => console.log(this.state.newUser));
  }
  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        [name]: value
      }
    }), () => console.log(this.state.newUser));
  }
  handleSignUpSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    let validation = validateSignUp();
    if (validation === true) {
      axios({
        method: "POST",
        url: '/signup',
        body: JSON.stringify(userData),
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
    } else {
      console.log("Not Validated");
    }
    return validation;
  }
  handleSignInSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    let validation = validateSignIn();
    if (validation === true) {
      axios({
        method: "POST",
        url: '/signin',
        body: JSON.stringify(userData),
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
    } else {
      console.log("Not Validated");
    }
    return validation;
  }
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        lastNames: "",
        email: "",
        bornDate: "",
        password: ""
      }
    });
  }

  render() {
    return (<div>
      {
        this.state.signUpVisible
          ? <SignUp newUser={this.state.newUser} onClick={this.onClick} handleSignUpSubmit={this.handleSignUpSubmit} handleBornDate={this.handleBornDate} handleInput={this.handleInput} handleClearForm={this.handleClearForm}/>
          : <SignIn newUser={this.state.newUser} onClick={this.onClick} handleSignInSubmit={this.handleSignInSubmit} handleInput={this.handleInput}/>
      }
    </div>)
  }
}

export default FormContainer;
