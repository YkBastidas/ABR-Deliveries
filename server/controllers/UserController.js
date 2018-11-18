var postgre = require('pg');
var bcrypt = require('bcryptjs');



module.exports = {

	/*getSignUp : function (req,res,next) {
		return res.render('users/signup');
	},*/

	postSignUp : function (req,res,next){
        console.log(req.body);
        console.log(req);
        var salt = bcrypt.genSaltSync(10);
        var password = bcrypt.hashSync(req.body.contraseniaRegistro, salt);
        
        var config=require('server/database/config');
        var db= new postgre.Client(config);
        db.connect();
        
        const text='INSERT INTO datoscuenta(loginemail,usernames,userlastnames,passwordhash,dateofbirth) VALUES($1,$2,$3,$4,$5) RETURNING *';
         const values= [req.body.correoRegistro,req.body.nombre,req.body.apellidos,password,req.body.fechaNacimiento];
        db.query(text,values,(err,res) =>{
            if (err) {
                console.log(err.stack());
            }


			db.end();
        });

        return res.redirect('/#signin');

    },

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
