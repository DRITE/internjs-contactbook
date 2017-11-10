import {showContactsOnPage} from './show-contacts-on-page';
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


