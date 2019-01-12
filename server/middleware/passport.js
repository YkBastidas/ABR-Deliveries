var LocalStrategy = require('passport-local').Strategy;
var postgre = require('pg');
var bcrypt = require('bcryptjs');

var guardadoEnBase={
	'username':'alguien@hotmail.com',
	'password':'$2a$10$WSDy1SbZ0e/52rVY2xphkO5VYZr1UNuDReNYdMWskINHEiXc8HP2m'
}

module.exports = function (passport) {
	
	passport.serializeUser(function(user,done) {
		done(null,user.id);
	});

	passport.deserializeUser(function(user,donepass) {
        var config=require('.././database/config');
        const pool = postgre.Pool(config);

        pool.on('error', (err, client) => {
            console.error('Unexpected error on idle client', err)
            process.exit(-1)
        })
        pool.connect((err, client, done) => {
            if (err) throw err
            client.query('SELECT * FROM usuario WHERE id = $1',[user], (err, res) => {
                if (err) {
                    console.log(err.stack)
                }
                else {
                    if (res.rows.length>0){
                        var user = res.rows[0];
                            console.log('se deserializo-->', user);
                            return donepass (null,user);   
                    } 
                
                }
                donepass(null,false);
                done();
            });
        });

		
	});

	passport.use(new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
		passReqToCallback: true
	}, function(req,username,password,donepass){

        var config=require('.././database/config');
        const pool = postgre.Pool(config);

        pool.on('error', (err, client) => {
            console.error('Unexpected error on idle client', err)
            process.exit(-1)
        })



      /*  pool.connect((err, client, done) => {
            if (err) throw err
            client.query('SELECT * FROM usuario WHERE correo = $1',[username], (err, res) => {
           //  done()
          
              if (err) {
                console.log(err.stack)
              } else {
                if (res.rows.length>0){
                    var user = res.rows[0];

                    if (bcrypt.compareSync(password,user.contrasenha)){
                        res.send(user);
                        return donepass (null,user);
                    }else{
                        res.send({'password':'contra invalida'});
                        console.log('contrasena invalida');
                        return donepass(null,null);
                    }

                }else {
                    res.send({'correo':'correo invalido'});
                    console.log('usuario no valido');
                    return donepass(null,null);
                }
                done(); 
               


              }
            })*/
	
            if(username==guardadoEnBase.username){
	         if (bcrypt.compareSync(password,guardadoEnBase.password)){
                        return donepass (null,{'correo':guardadoEnBase.username});
                    }else{
                        return donepass(null,{'password':'contra invalida'});
                    }
          }
          else{
            return donepass(null,{'correo':'correo invalido'});
          }

          
        
		return;
	}
	));




}



