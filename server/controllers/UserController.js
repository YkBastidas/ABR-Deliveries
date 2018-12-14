var postgre = require('pg');
var bcrypt = require('bcryptjs');



module.exports = {

	redirecProfile : function (req,res,next) {
		 return res.redirect('/perfil');
	},

	postSignUp: function (req,res,next){
        console.log(req.body);
    	console.log(req.body.email);
        console.log(req.body.password);
        var salt = bcrypt.genSaltSync(10);
        var contrasenha = bcrypt.hashSync(salt, req.password);
        var config=require('.././database/config');
        var db= new postgre.Client(config);
        db.connect();

        const text='INSERT INTO usuario(correo,nombre,apellido,contrasenha,fecha_nacimiento,id_entrega) VALUES($1,$2,$3,$4,$5,$6) RETURNING *';
         const values= [req.email,req.name,req.lastNames,contrasenha,req.bornDate, null];
        db.query(text,values,(err,res) =>{
            if (err) {
                console.log(err.stack);
            }

			db.end();
        });

        res.redirect('/');
    },




	logout : function(req,res,next){
		req.logout();
		res.redirect('/');
	},




};
