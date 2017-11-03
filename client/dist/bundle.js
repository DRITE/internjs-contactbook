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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myContacts; });

let myContacts = [
    {
        name: "Nikolay",
        surname: "Gritsenko"
    },
    {
        name: "Vasya",
        surname: "Pupkin"
    }
];



//import {loginButton} from './handle-login';



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handle_add_contact__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handle_forgotten_password__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_contacts_js__ = __webpack_require__(5);
//import {myContacts} from "./index.js";
//export let loginButton



let loginButton = document.getElementById('quick_login_button');
loginButton.addEventListener('click', handelLogin);


function handelLogin(){
    console.log('before fetch');
    fetch('./contacts')
    .then((response) => {
        Object(__WEBPACK_IMPORTED_MODULE_2__show_contacts_js__["a" /* default */])();
        return response.text(); //actually trying return html 
    })
    // .then((body) => {
    //     console.log(body);
    // })
    .catch(() => {
        alert('Errror..');
    });
    console.log('after fetch');
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addContactButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_contact__ = __webpack_require__(3);

let addContactButton = document.getElementById('add_contact_button');
addContactButton.addEventListener('click', handelAddContact);
let newContactName = document.getElementById('contact_name_id');
let newContactSecondName = document.getElementById('contact_second_name_id');


function handelAddContact(){
    fetch('./add')
    .then((response) => {
        if (response.status !== 200) {
            console.log('имя: ' + newContactName.value);
            Object(__WEBPACK_IMPORTED_MODULE_0__add_contact__["a" /* addContact */])(newContactName.value, newContactSecondName.value);
            console.log('Была вызвана функция добавления контакта');
        }
        return response.text();
    })
    .then((body) => {
        console.log(body);
    })
    .catch(() => {
        alert('Error..');
    });
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addContact;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);


function addContact(newName, newSecondName) {
    __WEBPACK_IMPORTED_MODULE_0__index__["a" /* myContacts */].push({name: newName, surname: newSecondName});
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export forgottenPassButton */
function handleForgottenPass(){
    alert('Хьюстон, у тебя проблема...');
}

let forgottenPassButton = document.getElementById('quick_forgot_password');
forgottenPassButton.addEventListener('click', handleForgottenPass);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = printContacts;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);

//let myContacts = require("./index");
function printContacts(){
    console.log(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* myContacts */]);
}





/***/ })
/******/ ]);