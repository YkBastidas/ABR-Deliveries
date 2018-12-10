var express = require('express');
var router = express.Router();
var passport= require('passport');
var controllers = require('.././controllers');
//var AuthMiddleware = require('.././middleware/auth');


router.get('/',controllers.HomeController.index);
router.get('/prueba',controllers.UserController.postSignUp);
router.get('/nel',controllers.HomeController.tomarunoprueba);
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