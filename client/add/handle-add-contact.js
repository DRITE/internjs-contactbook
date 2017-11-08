//import {addContact} from './add-contact';
export let addContactButton = document.getElementById('add_contact_button');
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
    })
    .catch((err) => {
        console.log('AHTUNG! При добавлении контакта сервер вернул какую-то ошибку', err);
    });
}