var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var myContacts = require('../client/index');
//var addNewContact = require('../client/add/add-contact');//Пока этот метод здесь
//var deleteContactByKey = require('');//////////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('../client'));

app.get('/contacts', function (req, res) {
  //console.log('Я на сервере. Смотрим, что тут у нас с контактами:', myContacts);
  res.send(JSON.stringify(myContacts));
});
app.post('/contacts', function(req, res){
  // console.log('Я на сервере. Смотрим, что тут у нас в запросе:', req.body);
  // console.log('Я на сервере. Смотрим, что тут у нас с типом запроса:', typeof(req.body));
  if (typeof(req.body) === 'object' && req.body.key !== undefined) { //Условие можно улучшить регуляркой или подумать ещё
    console.log('с условием всё норм');
    if (deleteContactByKey(req.body.key)) {
      console.log('зашли если тру');
      res.send(JSON.stringify(myContacts));
      return;
    } else {
      console.log('зашли если false');
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
//КАК Я ПОНЯЛ У FETCH НЕТ ПОЛИФИЛА ДЛЯ МЕТОДА DELETE, ПОЭТОМУ БУДЕМ УДАЛЯТЬ ЧЕРЕЗ МЕТОД POST
// app.delete('/contacts', function(req, res){
//   console.log('Я на сервере. Смотрим, что тут у нас в запросе:', req.body);
//   console.log('Я на сервере. Смотрим, что тут у нас с типом запроса:', typeof(req.body));
//   //реализовать метод удаления //пусть реквест содержит key 
//   if (deleteContactByKey(req.body)) {
//     res.send(JSON.stringify(myContacts));
//   } else {
//     res.send('AHTUNG! Контакт не удален!');
//   }
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function deleteContactByKey(keyForDelete) {
  console.log('Удаляем контакт с ключом: ', keyForDelete);
  let requiredIndex = findWithAttr(myContacts, 'key', keyForDelete); //Потом я Это перепишу с методом Array.prototype.findIndex()
  console.log('И с индексом: ', requiredIndex);
  if (requiredIndex > -1 && myContacts.splice(requiredIndex, 1)){
    return true;
  } else {
    console.log('deleteContactByKey returns false');
    return false;
  }
}
function findWithAttr(array, attr, value) { 
  for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
          return i;
      }
  }
  return -1;
}

function addContact(newContact) { // на входе сразу объект, якобы
  //let newContact = JSON.parse(newContactString);
  if (typeof(newContact.phoneNumber) === undefined) {
      console.log('В новом контакте не задан номер телефона');
      return false;
  } else {
      newContact.key = newContact.phoneNumber.toString();
      //СЛЕДУЮЩАЯ ПОРВЕРКА ДЛЯ ТРОССИРОВКИ
      if(typeof(newContact.key) !== "string"){
          console.log('AHTUNG! Ключ не строка');
      }
      myContacts.push(newContact);
      return true;
  }
}


// let http = require('http');
// let server = new http.Server();
// server.listen(3000, '127.0.0.1');
// server.on('request', function(req, res) {
//   res.end('Ny privet, mir');
// });



