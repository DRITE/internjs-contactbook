import {showContactOnPage} from './show-contacts-on-page';
export let showContactsButton = document.getElementById('show_contact_button_id');
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
        showContactsOnPage(contacts);
    })
    .catch((err) => {
        console.log('AHTUNG! При показе контактов сервер матерится:', err);
    })
}


function showContactsOnPage(contacts){
    console.log('Зашли в showContactsOnPage, который рисует конакты');
    // if (Array.isArray(contacts)) {
    //     document.appendChild(document.createElement('br'));
    //     contact.forEach(showContactOnPage)
    // } else {
    //     console.log('contacts is not array', typeof(contacts));
    // }
    for (var key in contacts) {
        console.log('Текущий ключ: ', key);
        console.log('Значение по этому ключу: ', contacts[key]);
        showContactOnPage(contacts[key]);
    }
}