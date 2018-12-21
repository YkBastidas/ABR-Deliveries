var LocalStrategy = require('passport-local').Strategy;
var postgre = require('pg');
var bcrypt = require('bcryptjs');

module.exports = function (passport) {
	
	passport.serializeUser(function(user,done) {
        console.log('serializeUser callback. User id se guarda en cookie session aqui')
        console.log (`id del user dentro del serialize ${user.id}`)
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

        console.log('Estoy en localstrategy');
        console.log('username', username);
        console.log('password', password);

        pool.connect((err, client, done) => {
            if (err) throw err
            client.query('SELECT * FROM usuario WHERE correo = $1',[username], (err, res) => {
           //  done()
          
              if (err) {
                console.log(err.stack)
              } else {
                if (res.rows.length>0){
                    var user = res.rows[0];

                    if (bcrypt.compareSync(password,user.contrasenha)){

                        console.log(user);
                        return donepass (null,user);
                    }else{
                        console.log('contrasena invalida');
                        return donepass(null,null);
                    }

                }else {
                    console.log('usuario no valido');
                    return donepass(null,null);
                }
                done(); 
               
              }
            })
          })

		return;
	}
	));
}