var postgre = require('pg');
var bcrypt = require('bcryptjs');
var postgre = require('pg');


var guardadoEnBase={
  'username':'alguien@hotmail.com',
  'password':'$2a$10$WSDy1SbZ0e/52rVY2xphkO5VYZr1UNuDReNYdMWskINHEiXc8HP2m'
}

module.exports = {

  /*redirecProfile: function(req, res, next) {
    return res.redirect('/perfil');
  },*/

  postSignUp: function(req, res, next) {	

    var salt = bcrypt.genSaltSync(10);
    var contrasenha = bcrypt.hashSync(req.body.contrasenha, salt);

    var config = require('.././database/config');
    var db = new postgre.Client(config);
    //db.connect();
    //let promesa= new Promise((resolve,reject)=>{
  //   const text = 'INSERT INTO usuario(correo,nombre,apellido,contrasenha,fecha_nacimiento,id_entrega) VALUES($1,$2,$3,$4,$5,$6) RETURNING *';
    //const values = [req.body.correo, req.body.nombre, req.body.apellido, contrasenha, req.body.fecha_nacimiento, req.body.id_entrega];
    //db.query(text, values, (err, res) => {
      //if (err) {
	//	    if (err.code==23505){
	//	      reject('Error');
	//	    }
//      }
  //    resolve('exito');
    //})
    //}).then((resultado)=>{
	//    res.send(req.body);
	//},(error)=>{
	//console.log('usuario repetido');
    //res.send({'correo':'correo invalido'});
	//  });

	if (req.body.correo=='alguien@hotmail.com'){
	res.send({"correo" : "alguien@hotmail.com"});
	}
	else{
	res.send({"correo" : req.body.correo});
	}
	
	

  },




  logout: function(req, res, next) {
    req.logout();
    req.session = null;
    res.send('Sesion finalizada en server')
  },


  pruebaInicio:function(req,res,err){
        var username=req.body.username;
        var password=req.body.password;

        var config=require('.././database/config');
        const pool = postgre.Pool(config);

        pool.on('error', (err, client) => {
            console.error('Unexpected error on idle client', err)
            process.exit(-1)
        })


            if(username==guardadoEnBase.username){
           if (bcrypt.compareSync(password,guardadoEnBase.password)){
                        res.send({'correo':guardadoEnBase.username});
                    }else{
                        res.send({'password':'contra invalida'});
                    }
          }
          else{
            res.send({'correo':'correo invalido'});
          }

          
        
    return;
  }

};
