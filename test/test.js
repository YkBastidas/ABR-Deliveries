var should = require('should');
var app = require('../server/server');
var request = require('supertest');

describe('unitary test for register', function() {


  it('prueba de conexion', function(done) {
    request(app)
      .get('/hola')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);
        res.body.should.have.property('saludo','hola mundo');

         });
      done();
  });



  it('prueba registrar usuario con un correo repetido', function(done) {
    request(app)
      .post('/auth/signup')
      .send({
	"correo" : "alg@hotmail.com",
	"nombre" : "felix",
	"apellido" : "hhh",
	"contrasenha" : "12345Ll*",
	"fecha_nacimiento" : "2000-1-1"
	})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);
        res.body.should.have.property('correo','alguien@hotmail.com');

         });
      done();
  });


	 it('prueba registrar usuario nuevo', function(done) {
    request(app)
      .post('/auth/signup')
      .send({
	"correo" : "unDesconocido11@hotmail.com",
	"nombre" : "felix",
	"apellido" : "hhh",
	"contrasenha" : "12345Ll*",
	"fecha_nacimiento" : "2000-1-1"
	})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);
        res.body.should.have.property('correo','unDesconocido11@hotmail.com');

         });
      done();
  });

  it('inicio de sesion normal', function(done) {
    request(app)
      .post('/auth/signin')
      .send({
	"username" : "algui@hotmail.com",
	"password" : "12345Ll*"
	})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);
        res.body.should.have.property('correo','alguien@hotmail.com');

         });
      done();
  });

  it('inicio de sesion correo invalido', function(done) {
    request(app)
      .post('/auth/signin')
      .send({
	"username" : "noexiste@hotmail.com",
	"password" : "12345Ll*"
	})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);
        res.body.should.have.property('correo','correo invalido');

         });
      done();
  });


  it('inicio de sesion contraseña invalida', function(done) {
    request(app)
      .post('/auth/signin')
      .send({
	"username" : "alguien@hotmail.com",
	"password" : "12345Ll*bfdbdjbnj"
	})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);
        res.body.should.have.property('password','contra invalida');

         });
      done();
  });

});
