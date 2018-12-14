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

  },

  david: function(req, res, next) {
    console.log(req.body);

  },

  postRegisterPackage: function(req, res, next) {
    console.log(req.body);
    console.log(req);
 /*   var salt = bcrypt.genSaltSync(10);
    var password = bcrypt.hashSync(req.body.passwordSignUp, salt); */

    var config = require('../database/config');
    var db = new postgre.Client(config);
    db.connect();

                                  /------NOVEDAD------/

    var datos={"nombreEntrega" : "Pedro", "apellidoEntrega" : "Perez", "direccionRecogida" : "Colegio Mariano Picon Salas, Urbanización Montalbán I, Capital District 1020 VE",
  "direccionLlegada" : "Universidad Católica Andrés Bello, Parroquia La Vega, Capital District 1020 VE",
  "paquetes" : [
        { "peso" : "3,2", "altura" : "20", "ancho" : "20", "descripcion" : "Pelota", "fragil" : "0"},
        { "peso" : "25", "altura" : "50", "ancho" : "26", "descripcion" : "Estatua", "fragil" : "0"},
        { "peso" : "1", "altura" : "20",  "ancho" : "12", "descripcion" : "Celular",  "fragil" : "1"}
    ]
   };

    var nombreEntrega=datos.nombreEntrega;
    var apellidoEntrega=datos.apellidoEntrega;
    var direccionLlegada=datos.direccionLlegada;
    var direccionRecogida=datos.direccionRecogida;
     for(let i in datos.paquetes) {
       console.log(datos.paquetes[i])
     }


    var textEntrega = 'INSERT INTO Entrega (nombreRemitente,apellidoRemitente,direccionRecogida,direccionEntrega) VALUES($1,$2,$3,$4) RETURNING idEntrega';
    var values = [nombreEntrega,apellidoEntrega,direccionRecogida, direccionLlegada];
    var idPaquetes;
    var textPaquetes = 'INSERT INTO Paquete (idEntrega,peso,altura,ancho,descripcion,fragil) VALUES($1,$2,$3,$4,$5,$6) RETURNING *';

       //Seccion que introduce los paquetes uno a uno desde el JSON


    db.query(textEntrega, values, (err, res) => {
      if (err) {
        console.log(err.stack());
      }

    });

    var numeroDeEntrega=res.rows[0].idEntrega;

    for(let i in datos.paquetes) {
       var peso=datos.paquetes[i].peso;
       var altura=datos.paquetes[i].altura;
       var ancho=datos.paquetes[i].ancho;
       var descripcion=datos.paquetes[i].descripcion;
       var fragil=datos.paquetes[i].fragil;
       values =[peso,altura,ancho,descripcion,fragil];

       db.query(textPaquetes, values, (err, res) => {
          if (err) {
             console.log(err.stack());
           }
           else{
             idPaquetes.push(res.rows[0].idEntrega);
           }

       }

       //Agregar la funcion del ultimo elemento agregado para hacerle push a un array que se introducira en Entrega
     }

     const pool = postgre.Pool(config);

     pool.on('error', (err, client) => {
       console.error('Unexpected error on idle client', err)
       process.exit(-1)
     })


    pool.connect((err, client, done) => {
      if (err) throw err
      client.query('SELECT * FROM Entrega WHERE idEntrega = $1', [numeroDeEntrega], (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          textEntrega = 'INSERT INTO Entrega (idPaquete) WHERE idEntrega = numeroDeEntrega VALUES ($1)';
          values=[idPaquetes];
          db.query(textEntrega, values, (err, res) => {
             if (err) {
               console.log(err.stack());
             }
             else{
              console.log(res);
             }
          });
          return done(null, false);
        }
      })
    })

    

    cons

    db.end();

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
