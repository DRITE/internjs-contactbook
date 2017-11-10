/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showContactsOnPage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__show_contact__ = __webpack_require__(1);


function showContactsOnPage(contacts){
    console.log('Зашли в showContactsOnPage, который рисует конакты');
    Object(__WEBPACK_IMPORTED_MODULE_0__show_contact__["a" /* clearRootElement */])();
    // if (Array.isArray(contacts)) {
    //     document.appendChild(document.createElement('br'));
    //     contact.forEach(showContactOnPage)
    // } else {
    //     console.log('contacts is not array', typeof(contacts));
    // }
    for (var key in contacts) {
        console.log('Текущий ключ: ', key);
        console.log('Значение по этому ключу: ', contacts[key]);
        Object(__WEBPACK_IMPORTED_MODULE_0__show_contact__["b" /* showContactOnPage */])(contacts[key]);
    }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = showContactOnPage;
/* harmony export (immutable) */ __webpack_exports__["a"] = clearRootElement;
let rootElement = document.getElementById('root');

function showContactOnPage(contact) {
    console.log('Зашли в showContactOnPage, рисуем', contact);
    var div = document.createElement('div');
    let s = '|| ';
    var h3 = document.createElement('h3');
    for (var key in contact) {
        console.log('Пытаемся нарисовать элемент: ', contact[key]);
        //s.contact(" " + contact[key]);
        s = s + key +": " + contact[key] + " ||  ";
    }
    h3.innerHTML = s;
    div.appendChild(h3);
    rootElement.appendChild(div);
}

function clearRootElement() {
    rootElement.innerHTML = '';
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__show_handle_show_contacts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delete_handle_delete_contact__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_handle_add_contact__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handle_forgotten_password__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_contacts_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_contacts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__show_contacts_js__);
//import {myContacts} from "./index.js";
//export let loginButton





let loginButton = document.getElementById('quick_login_button');
loginButton.addEventListener('click', handelLogin);


function handelLogin(){
    fetch('./contacts')
    .then((response) => {
        __WEBPACK_IMPORTED_MODULE_4__show_contacts_js___default()();
        return response.text(); //actually trying return html 
    })
    // .then((body) => {
    //     console.log(body);
    // })
    .catch(() => {
        alert('Errror..');
    });
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export showContactsButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__show_contacts_on_page__ = __webpack_require__(0);

let showContactsButton = document.getElementById('show_contact_button_id');
showContactsButton.addEventListener('click', handleShowContacts);

let contacts;
function handleShowContacts() {
    fetch('/contacts')
    .then((response) =>{
        console.log('Смотрим как выглядит респонс на показ контактов:', response);
        return response.json();
    })
    .then((json) => {
        console.log('Parsed json:', json);
        console.log('Смотрим тип распарсенного ответа', typeof(json));
        return json;
    })
    .then((contacts) => {
        console.log('Зашли в then, который рисует конакты');
        console.log('Смотрим тип контактов: ', typeof(contacts));
        Object(__WEBPACK_IMPORTED_MODULE_0__show_contacts_on_page__["a" /* showContactsOnPage */])(contacts);
    })
    .catch((err) => {
        console.log('AHTUNG! При показе контактов сервер матерится:', err);
    })
}




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deleteContactButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__show_show_contacts_on_page__ = __webpack_require__(0);

let deleteContactButton = document.getElementById('delete_contact_button_id');
deleteContactButton.addEventListener('click', handelDeleteContact);
let deleteContactKey = document.getElementById('contact_key_for_delete_id');

function handelDeleteContact(){
    fetch('./contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ //При добавлении реакта это надо будет переделать
            key: deleteContactKey.value,
        })
    })
    .then((response) => {
        console.log('Смотрим как выглядит респонс на удаление контакта:', response);
        return response.json();
    })
    .then((json) => {
        console.log('Parsed json:', json);
        return json;
    })
    .then((contacts) => {
        console.log('Зашли в then, который рисует конакты');
        console.log('Смотрим тип контактов: ', typeof(contacts));
        Object(__WEBPACK_IMPORTED_MODULE_0__show_show_contacts_on_page__["a" /* showContactsOnPage */])(contacts);
    })
    .catch((err) => {
        console.log('AHTUNG! При удалении контакта сервер вернул какую-то ошибку', err);
    });
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addContactButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__show_show_contacts_on_page__ = __webpack_require__(0);

let addContactButton = document.getElementById('add_contact_button');
addContactButton.addEventListener('click', handelAddContact);
let newContactName = document.getElementById('contact_name_id');
let newContactSecondName = document.getElementById('contact_second_name_id');
let newContactPhoneNumber = document.getElementById('contact_phone_number_id');


function handelAddContact(){
    fetch('./contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ //При добавлении реакта это надо будет переделать
            firstName: newContactName.value,
            lastName: newContactSecondName.value,
            phoneNumber: newContactPhoneNumber.value
        })
    })
    .then((response) => {
        console.log('Смотрим как выглядит респонс на добавление контакта:', response);
        return response.json();
    })
    .then((json) => {
        console.log('Parsed json:', json);
        return json;
    })
    .then((contacts) => {
        console.log('Зашли в then, который рисует конакты');
        console.log('Смотрим тип контактов: ', typeof(contacts));
        Object(__WEBPACK_IMPORTED_MODULE_0__show_show_contacts_on_page__["a" /* showContactsOnPage */])(contacts);
    })
    .catch((err) => {
        console.log('AHTUNG! При добавлении контакта сервер вернул какую-то ошибку', err);
    });
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export forgottenPassButton */
function handleForgottenPass(){
    alert('Хьюстон, у тебя проблема...');
}

let forgottenPassButton = document.getElementById('quick_forgot_password');
forgottenPassButton.addEventListener('click', handleForgottenPass);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// import {myContacts} from "./index.js";
// //let myContacts = require("./index");
// export default function printContacts(){
//     console.log(myContacts);
// }
//Пока закоментим этот метод. Он может и не понадобится, не знаю..





/***/ })
/******/ ]);