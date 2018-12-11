var postgre = require('pg');
var bcrypt = require('bcryptjs');



module.exports = {

	redirecProfile : function (req,res,next) {
		 return res.redirect('/perfil');
	},

	postSignUp: function (req,res,next){
        var salt = bcrypt.genSaltSync(10);
        var password = bcrypt.hashSync(req.body.password, salt);
        
        var config=require('.././database/config');
        var db= new postgre.Client(config);
        db.connect();
        
        const text='INSERT INTO datoscuenta(correo,nombre,apellido,contrasenha,fechaNacimiento) VALUES($1,$2,$3,$4,$5) RETURNING *';
         const values= [req.body.email,req.body.name,req.body.lastname,password,req.body.date];

        db.query(text,values,(err,res) =>{
            if (err) {
                console.log(err.stack());
            }


			db.end();
        });

        return res.redirect('/auth/signin');

    },

	


	logout : function(req,res,next){
		req.logout();
		res.redirect('/');
	},


	

};