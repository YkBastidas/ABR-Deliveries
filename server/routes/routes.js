var express = require('express');
var router = express.Router();
var passport= require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');


// "GET" requests
router.get('/auth/logout',controllers.UserController.logout);
router.get('/perfil', AuthMiddleware.isLogged ,controllers.UserController.redirecProfile);
router.get('/', controllers.HomeController.index); //funcion de prueba


//"POST" request
router.post('/auth/signup',controllers.UserController.postSignUp);//registrar
router.post('/auth/signin',passport.authenticate('local',{//iniciar sesion
	successRedirect : '/perfil',
	failureRedirect : '/',
}));


module.exports = router;