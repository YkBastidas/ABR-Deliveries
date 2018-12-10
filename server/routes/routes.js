var express = require('express');
var router = express.Router();
var passport= require('passport');
var controllers = require('.././controllers');
//var AuthMiddleware = require('.././middleware/auth');

router.get('/auth/logout',controllers.UserController.logout);
router.post('/auth/signup',controllers.UserController.postSignUp);
router.post('/auth/signin',passport.authenticate('local',{
	successRedirect : '/perfil',
	failureRedirect : '/',
}));

//rutas de usuario
/*
router.get('/auth/logout',controllers.UserController.logout);
router.get('/users/panel',AuthMiddleware.isLogged,controllers.UserController.getUserPanel);
*/
module.exports = router;