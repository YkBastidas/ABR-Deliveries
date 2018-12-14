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
    var arregloEntregas=[];

    var textBusqueda = 'SELECT id_entrega FROM entrega WHERE id=idUsuario return id_entrega RETURNING *';

    db.query(textBusqueda,(err, res) => {
      if (err) {
        console.log(err.stack());
      }
      else{
        for(let i in res){

         //ARREGLA EL FORMATO DEL DATA TYPE PARA QUE SEA FORMATO DE JSON
          var arregloDireccionSalida=res.row(i).direccion_recogida;
          arregloDireccionSalida=arregloDireccionSalida.substring(4,arregloDireccionSalida.length-1);
          arregloDireccionSalida=arregloDireccionSalida.split(',');
          for(let i in arregloDireccionSalida){
            arregloDireccionSalida[i]=arregloDireccionSalida[i].substring(1,arregloDireccionSalida[i].length-1);
          }

          var arregloDireccionSalida=res.row(i).direccion_entrega;
          arregloDireccionLlegada=arregloDireccionLlegada.substring(4,arregloDireccionLlegada.length-1);
          arregloDireccionLlegada=arregloDireccionLlegada.split(',');
          for(let i in arregloDireccionLlegada){
            arregloDireccionLlegada[i]=arregloDireccionLlegada[i].substring(1,arregloDireccionLlegada[i].length-1);
          }

          var creacionJSON={"id_entrega":res.row(i).id_entrega,"nombre_remitente":res.row(i).nombre_remitente,"apellido_remitente":res.row(i).apellido_remitente,"direccion_recogida":{"linea1":arregloDireccionSalida[0],"linea2":arregloDireccionSalida[1],"codigo_postal":arregloDireccionSalida[2],"ciudad":arregloDireccionSalida[3],"pais":arregloDireccionSalida[4]},"direccion_entrega":{"linea1":arregloDireccionLlegada[0],"linea2":arregloDireccionLlegada[1],"codigo_postal":arregloDireccionLlegada[2],"ciudad":arregloDireccionLlegada[3],"pais":arregloDireccionLlegada[4]}};
          arregloEntregas.push(creacionJSON);

        }
      }
      var todo={"entrega":arregloEntregas};


    });

      res=todo;
      db.end();
  },

  getPackagesJSON   

};
