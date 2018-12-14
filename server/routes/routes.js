var express = require('express');
var router = express.Router();
var passport= require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');


// "GET" requests
router.get('/auth/logout',controllers.UserController.logout);
router.get('/perfil', AuthMiddleware.isLogged ,controllers.UserController.redirecProfile);
router.get('/hola', controllers.HomeController.index); //funcion de prueba


//"POST" request
router.post('/auth/signup',controllers.UserController.postSignUp);//registrar



router.post('/auth/signin', function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
	  if (err) { return next(err); }
	  if (!user) { console.log('no usuario'); return res.send(false); }
	  req.logIn(user, function(err) {
		if (err) { return next(err); }
		console.log('soy el user', user);
		return res.send(user);
	  });
	})(req, res, next);
  });



module.exports = router;