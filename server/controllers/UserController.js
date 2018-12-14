var postgre = require('pg');
var bcrypt = require('bcryptjs');

module.exports = {

  /*getSignUp : function (req,res,next) {
  	return res.render('users/signup');
  },*/

  postSignUp: function(req, res, next) {
    console.log(req.body);
    var salt = bcrypt.genSaltSync(10);
    var password = bcrypt.hashSync(req.body.passwordSignUp, salt);

    var config = require('../database/config');
    var db = new postgre.Client(config);
    db.connect();

    const text = 'INSERT INTO Usuario (correo,nombre,apellido,contrasenha,fechaNacimiento) VALUES($1,$2,$3,$4,$5) RETURNING *';
    const values = [req.body.emailSignUp, req.body.name, req.body.lastNames, passwordSignUp, req.body.bornDate];
    db.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack());
      }

      db.end();
    });

    return res.redirect('/perfil');

  }

  /*	getSignIn : function(req,res,next) {
  		return res.render('users/signin',{message: req.flash('info'),authmessage : req.flash('authmessage')});
  	},


  	logout : function(req,res,next){
  		req.logout();
  		res.redirect('/auth/signin');
  	},


  	getUserPanel : function(req,res,next){
  		res.render('user/panel');
  		isAuthenticated : req.isAuthenticated(),
  		user : req.user
      }*/

};
