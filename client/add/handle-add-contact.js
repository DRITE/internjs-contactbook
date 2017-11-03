import {addContact} from './add-contact';
export let addContactButton = document.getElementById('add_contact_button');
addContactButton.addEventListener('click', handelAddContact);
let newContactName = document.getElementById('contact_name_id');
let newContactSecondName = document.getElementById('contact_second_name_id');


function handelAddContact(){
    fetch('./add')
    .then((response) => {
        if (response.status !== 200) {
            console.log('имя: ' + newContactName.value);
            addContact(newContactName.value, newContactSecondName.value);
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