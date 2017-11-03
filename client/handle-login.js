//import {myContacts} from "./index.js";
//export let loginButton
import {addContactButton} from './handle-add-contact';
import {forgottenPassButton} from './handle-forgotten-password';
import printContacts from "./show-contacts.js";
let loginButton = document.getElementById('quick_login_button');
loginButton.addEventListener('click', handelLogin);


function handelLogin(){
    fetch('./contacts')
    .then((response) => {
        printContacts();
        return response.text(); //actually trying return html 
    })
    // .then((body) => {
    //     console.log(body);
    // })
    .catch(() => {
        alert('Errror..');
    });
}

