import React, {Component} from 'react';
import './Loginscreen.css';


function validate () {
	var names,lastNames,password,email,bornDate,passwordEx,emailEx;

	names=document.getElementById('name').value;
	lastNames=document.getElementById('lastNames').value;
	email=document.getElementById('email').value;
	bornDate=document.getElementById('bornDate').value;
	password=document.getElementById('passwordSignUp').value;

	passwordEx=/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/
	emailEx=/\w+@+\w+\.+[a-z]/

	if (names==="" || lastNames==="" || email===""  || password==="" ) {
		alert("Todos los campos son obligatorios");
		return false;
	}
	else if (!passwordEx.test(password)) {
		alert("La contraseña es inválida");
		return false;
	}
	else if (!emailEx.test(email)) {
		alert("El correo es inválido");
		return false;
	}
	else if (calculateAge(bornDate)<18) {
		alert("Debes tener una edad mayor o igual a 18 años para acceder al sistema")
		return false;
	}

};
function validateSignIn(){
	var email, password, emailEx, passwordEx;
	email=document.getElementById('emailSignIn').value;
	password=document.getElementById('passwordSignIn').value;
	passwordEx=/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/
	emailEx=/\w+@+\w+\.+[a-z]/
	if (!passwordEx.test(password)) {
		alert("La contraseña es inválida");
		return false;
	}
	else if (!emailEx.test(email)) {
		alert("El correo es inválido");
		return false;
	}
};

function calculateAge(date) {
  var age;
  var today = new Date();
  var birthday = new Date(date);
  date = today.getFullYear() - birthday.getFullYear();
  var m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && (today.getDate() < birthday.getDate()+1))) {
        age--;
  }
  return age;
}

class SignIn extends Component{

  render(){
    return(
			<div>
				<div id="SignIn">
						<h3>
							<button className="btn btn-link" onClick={ this.props.parentMethod}> Registrarse </button>
							<span id="o"> o </span> Iniciar Sesión
						</h3>

				</div>

				<div>
		      <form method="post" onSubmit={validateSignIn} className="needs-validation" id="formSignIn">

		         <div className="form-group">
		            <div className="input-group">
		               <label className="sr-only" htmlFor="emailSignIn">Correo electrónico:</label>
		              <div className="input-group-text" id="basic-addon">@</div>
		          <input className="form-control" id="emailSignIn" type="email" placeholder="correo@direcion.ext" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="emailSignIn" required/>
		            </div>
		         </div>

		         <div className="form-group">
		            <label className="sr-only" htmlFor="passwordSignIn">Contraseña:</label>
		            <input className="form-control" id="passwordSignIn" type="password" placeholder="Contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}" name="passwordSignIn" required/>

		         </div>
		         {/* We still have to collect data from the server and send it to the user page after confirming the data*/}
		    <button className="btn btn-primary" type="submit">Iniciar Sesión</button>
		    </form>
			</div>
		</div>
    )
  }

}
class SignUp extends Component{
  render(){
    return(
			<div>
				<div id="signUp">
					<h3>Registrarse <span id="o"> o </span> <button className="btn btn-link" onClick={this.props.parentMethod}>
					Iniciar Sesión</button> </h3>
				</div>
				<div>
		      <form method ="post" onSubmit= {validate} className="needs-validation" id="formSignUp" action="">
		         <div className="form-group">
		            <div className="input-group">
		               <label className="sr-only" htmlFor="emailSignUp">Correo electrónico:</label>
		              <div className="input-group-text" id="basic-addon">@</div>
		              <input className="form-control" id="emailSignUp" type="email" placeholder="correo@direcion.ext" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="emailSignUp" required/>
		              </div>
		            </div>
		         <div className="form-group">
		            <label className="sr-only" htmlFor="name">Nombre(s):</label>
		            <input className="form-control" id="name" type="text"  maxLength="30" placeholder="Nombre(s)" pattern="[a-zA-Z_].*" name="name" required/>
		         </div>
		         <div className="form-group">
		            <label className="sr-only" htmlFor="lastNames">Apellidos:</label>
		            <input className="form-control" id="lastNames" type="text" maxLength="30" placeholder="Apellido(s)" pattern="[a-zA-Z_].*" name="apellidos" required/>
		         </div>
		         <div className="form-group">
		            <label className="sr-only" htmlFor="bornDate">Fecha de nacimiento:</label>
		            <input className="form-control" id="bornDate" type="date" min="1899-01-01" max="2018-01-01" name="bornDate" required />
		         </div>
		         <div className="form-group">
		            <label className="sr-only" htmlFor="passwordSignUp">Contraseña:</label>
		            <input className="form-control" id="passwordSignUp" type="password" placeholder="Contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}" name="passwordSignUp" required/>
		            <small id="passwordHelpBlock" className="form-text text-muted"> <b>Tu contraseña debe tener entre 8-20 caracteres, contener por lo menos una letra mayúscula y una minúscula y tener por lo menos 1 caracter especial. </b> </small>
		         </div>
		    <button className="btn btn-primary" type="submit">Registrar</button>
		        <input className="btn btn-warning" type="reset" value="Restaurar"/>
		    </form>
			</div>
	</div>
    )
  }
}

class SideRight extends Component{
  constructor(props){
		super(props);
		this.state ={
			signUpVisible: false
		}
		this.onClick = this.onClick.bind(this);
	}

	onClick(){
		this.setState(prevState => ({ signUpVisible: !prevState.signUpVisible}))
	}

  render(){
    return(
      <div>
				{
					this.state.signUpVisible ? <SignUp parentMethod={this.onClick}/> : <SignIn parentMethod={this.onClick}/>
				}
     </div>
    )
  }
}



export default SideRight
