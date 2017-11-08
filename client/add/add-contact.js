//import {myContacts} from "../index";
//Перенёс этот метод в server. Потом буду разбираться
// function addContact(newContactString) {
//     let newContact = JSON.parse(newContactString);
//     if (typeOf(newContact.phoneNumber) === undefined) {
//         console.log('В новом контакте не задан номер телефона');
//         return false;
//     } else {
//         newContact.key = newContact.phoneNumber.toString();
//         //СЛЕДУЮЩАЯ ПОРВЕРКА ДЛЯ ТРОССИРОВКИ
//         if(typeof(newContact.key) !== "string"){
//             console.log('AHTUNG! Ключ не строка');
//         }
//         myContacts.push(newContact);
//         return true;
//     }
// }

//module.exports = addContact;