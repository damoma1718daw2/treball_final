var express = require('express');
var app = express();
var db = require('./db');

app.get('/save',function(req,res){
    var post  = {from:'me', msg:'hi'};
    db.query('INSERT INTO prova SET ?', post, function(err, result) {
      if (err) throw err;
    });
});
app.get('/select',function(req,res){
  var post  = {from:'me', msg:'hi'};
  db.query('SELECT * FROM prova', function(err, result,fields) {
    if (err) throw err;
    console.log(result);
  });  
});

app.get('/selectInfants',function(req,res){
  var resultat;
  db.query('SELECT * FROM infant', function(err, result,fields) {
    if (err) throw err;
    result.forEach(function(element) {
      console.log(element.nom);
      console.log(element.cognoms);
      console.log(element.data_naixement);
      console.log(element.domicili);
      console.log(element.poblacio);
      console.log(element.codi_postal);
      console.log(element.telefon_contacte);
      console.log(element.email_contacte);
      console.log(element.nom_tutor1);
      console.log(element.nom_tutor2);
      console.log(element.malalties);
      console.log(element.al·lergies);
      console.log(element.nedar);
    });
  });
});

app.listen(3000);