import {addContact} from './add-contact';
// export let addContactButton = document.getElementById('add_contact_button');
// addContactButton.addEventListener('click', handelAddContact);
// let newContactName = document.getElementById('contact_name_id');
// let newContactSecondName = document.getElementById('contact_second_name_id');


export function handelAddContact(values){
    fetch('./add')
    .then((response) => {
        if (response.status !== 200) {
            console.log('Зашли в if в fetch');
            //addContact(newContactName.value, newContactSecondName.value);
            console.log('Пытаемся добавить массив', values);
            addContact(values);
            console.log('Прошли строку добавления контакта');
        }
        return response.text();
    })
    .then((body) => {
        console.log(body);
    })
    .catch(() => {
        alert('Сработал catch в fetch..');
    });
}