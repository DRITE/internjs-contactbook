var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var myContacts = require('../client/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('../client'));

app.get('/contacts', function (req, res) {
  //res.send('./contacts.html');
  //res.send('Выполнен переход на страницу контактов');
  //res.redirect('./contacts.html');
  //res.send(contacts);
  res.send(JSON.stringify(myContacts));
});
app.put('/contacts', function(req, res){
  //res.send(JSON.stringify(myContacts));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



// let http = require('http');
// let server = new http.Server();
// server.listen(3000, '127.0.0.1');
// server.on('request', function(req, res) {
//   res.end('Ny privet, mir');
// });



