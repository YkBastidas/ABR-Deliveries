var express = require('express');
var router = express.Router();
var passport= require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');


// "GET" requests
router.get('/auth/logout',controllers.UserController.logout);
router.get('/perfil', AuthMiddleware.isLogged ,controllers.UserController.redirecProfile);
router.get('/hola', controllers.HomeController.index); //funcion de prueba
router.get('/prueba', function (req, res) {
	console.log(req.cookies);
  res.send(req.cookies);
})


//"POST" request
router.post('/auth/signup',controllers.UserController.postSignUp);//registrar


router.post('/auth/signin', function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		console.log('Dentro de passport.authenticate() callback');
    console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
		if (err) { return next(err); }
	  if (!user || user === false) { console.log('no usuario'); return res.send(false); }
	  req.logIn(user, function(err) {
		if (err) { return next(err); }
		console.log('Dentro del req.login() callback')
		console.log('User', user);
		console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
    console.log(`req.user: ${JSON.stringify(req.user)}`)
		return res.send('login exitoso');
	  });
	})(req, res, next);
  });



module.exports = router;