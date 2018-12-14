var postgre = require('pg');
var bcrypt = require('bcryptjs');
var packagesNum 

module.exports = {

  /*getSignUp : function (req,res,next) {
  	return res.render('users/signup');
  },*/

  getPackagesJSON: function(req, res, next) {
    console.log(req.body);
    console.log(req);
 /*   var salt = bcrypt.genSaltSync(10);
    var password = bcrypt.hashSync(req.body.passwordSignUp, salt); */

    var config = require('../database/config');
    var db = new postgre.Client(config);
    db.connect();

                                  /------NOVEDAD------/

    var textBusqueda = 'SELECT id_entrega FROM entrega WHERE id=idUsuario return id_entrega';


    db.query(textBusqueda,(err, res) => {
      if (err) {
        console.log(err.stack());
      }
      else{
        var entregaBuscada=res.row[0];
      }
    });


  },

  getPackagesJSON   

};
