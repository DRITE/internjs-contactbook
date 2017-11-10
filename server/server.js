var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var myContacts = require('./contacts-storage');
var addContact = require('./actions-above-contacts/add-contact');
var deleteContactByKey = require('./actions-above-contacts/delete-contact-by-key');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('../client'));

app.get('/contacts', function (req, res) {
  //console.log('Я на сервере. Смотрим, что тут у нас с контактами:', myContacts);
  res.send(JSON.stringify(myContacts));
});
app.post('/contacts', function (req, res) {
  // console.log('Я на сервере. Смотрим, что тут у нас в запросе:', req.body);
  // console.log('Я на сервере. Смотрим, что тут у нас с типом запроса:', typeof(req.body));
  if (req.body.key !== undefined) {
    console.log('С условием на удаление контакта всё норм');
    if (deleteContactByKey(req.body.key)) {
      console.log('Удалён контакт с ключём: ', req.body.key);
      res.send(JSON.stringify(myContacts));
      return;
    } else {
      console.log('Не удалось удалить контакт с ключом ', req.body.key);
      res.send('AHTUNG! Контакт не удален!');
      return;
    }
  }
  if (addContact(req.body)) {
    res.send(JSON.stringify(myContacts));
  } else {
    res.send('AHTUNG! Новый контакт не добавлен!');
  }

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});








