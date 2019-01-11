var express = require('express');
var router = express.Router();
var passport= require('passport');
var Usercontrollers = require('./../UserControllers');

router.post('/auth/registro', UserControllers.postSignUp);

router.post('/auth/inicio',passport.authenticate('local',{
	successRedirect : '/perfil',
	failureRedirect : '/'
}));


router.post('/entregas/guardar', controllers.PackageController.postPackageRegister);






module.exports = router;
