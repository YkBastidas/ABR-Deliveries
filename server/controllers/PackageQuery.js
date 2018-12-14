var postgre = require('pg');
var bcrypt = require('bcryptjs');
var packagesNum 

module.exports = {

  /*getSignUp : function (req,res,next) {
  	return res.render('users/signup');
  },*/

  getPackagesJSON: function(req, res, next) {

    var config = require('../database/config');
    var db = new postgre.Client(config);
    db.connect();

                                  /------NOVEDAD------/

    var idUsuario=req.body.id;
    var valido=0;

    var textBusqueda = 'SELECT id_entrega FROM entrega WHERE id=idUsuario return id_entrega RETURNING *';

    db.query(textBusqueda,(err, res) => {
      if (err) {
        console.log(err.stack());
      }
      else{
        var entregaBuscada=res.row[0];
        var idEntrega=res.row[0].id_entrega;
        valido=1;

      }
    });

    textBusquedaPaquetes='SELECT * from paquetes WHERE id_entrega=idEntrega RETURNING *'
    var arregloPaquetes;
    if(valido){

      db.query(textBusquedaPaquetes,(err, res) => {
      if (err) {
        console.log(err.stack());
      }
      else{
        for(let i in res){
          arregloPaquetes.push(res.row(i));
        }
      }
    });

     //////////// HACER EL RETURN DEL ARREGLO

    }


  },

  getPackagesJSON   

};
