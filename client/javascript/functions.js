// Validar que el usuario sea mayor de edad
function validar () {
	var nombres,apellidos,contrasenia,correo,fechaDeNacimiento,expresionContrasenia,expresionCorreo;

	nombres=document.getElementById('nombre').value;
	apellidos=document.getElementById('apellidos').value;
	correo=document.getElementById('correoRegistro').value;
	fechaDeNacimiento=document.getElementById('fechaNacimiento').value;
	contrasenia=document.getElementById('contraseniaRegistro').value;

	expresionContrasenia=/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/
	expresionCorreo=/\w+@+\w+\.+[a-z]/
	if (nombres==="" || apellidos==="" || correo===""  || contrasenia==="" ) {
		alert("Todos los campos son obligatorios.");
		return false;
	}
	else if (!expresionContrasenia.test(contrasenia)) {
		alert("la contraseña es invalida");
		return false;
	}
	else if (!expresionCorreo.test(correo)) {
		alert("el correo es invalido");
		return false;
	}
	else if (calcularEdad(fechaDeNacimiento)<18) {
		alert("ERROR: Debes ser mayor de 18 años para acceder al sistema")
		return false;
	}
};
function validarInicio(){
	var correo, contrasenia
	correo=document.getElementById('correoInicio').value;
	contrasenia=document.getElementById('contraseniaInicio').value;
	expresionContrasenia=/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/
	expresionCorreo=/\w+@+\w+\.+[a-z]/
	if (!expresionContrasenia.test(contrasenia)) {
		alert("la contraseña es invalida");
		return false;
	}
	else if (!expresionCorreo.test(correo)) {
		alert("el correo es invalido");
		return false;
	}
};
function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && (hoy.getDate() < cumpleanos.getDate()+1))) {
        edad--;
    }
 return edad;
}

function boton(event){
	event.preventDefault;
}
//<>
