var express = require('express');
var router = express.Router();
var passport= require('passport');
var controllers = require('.././controllers');
//var AuthMiddleware = require('.././middleware/auth');


router.get('/muestra',controllers.HomeController.index);
router.get('/prueba',controllers.HomeController.pruebaInsertar);
//router.get('/signup',controllers.UserController.getSignUp);

router.post('/#signup',controllers.UserController.postSignUp);
router.post('/',passport.authenticate('local',{
	successRedirect : '/usuario',
	failureRedirect : '/'
}));


//rutas de usuario
/*router.get('/auth/signup',controllers.UserController.getSignUp);
router.post('/auth/signup',controllers.UserController.postSignUp);
router.get('/auth/signin',controllers.UserController.getSignIn);
router.post('/auth/signin',passport.authenticate('local',{
	successRedirect : '/lugar de entrada',
	failureRedirect : '/auth/signin',
	failureFlash : true
}));

router.get('/auth/logout',controllers.UserController.logout);
router.get('/users/panel',AuthMiddleware.isLogged,controllers.UserController.getUserPanel);
*/
module.exports = router;