var myContacts = require('../contacts-storage');
var addContact = function (newContact) { // на входе сразу объект, якобы
    //let newContact = JSON.parse(newContactString);
    if (typeof (newContact.phoneNumber) === undefined) {
        console.log('В новом контакте не задан номер телефона');
        return false;
    } else {
        newContact.key = newContact.phoneNumber.toString();
        //СЛЕДУЮЩАЯ ПОРВЕРКА ДЛЯ ТРОССИРОВКИ
        if (typeof (newContact.key) !== "string") {
            console.log('AHTUNG! Ключ не строка');
        }
        myContacts.push(newContact);
        return true;
    }
};

module.exports = addContact;