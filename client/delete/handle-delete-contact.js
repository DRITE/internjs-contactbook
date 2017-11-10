import {showContactsOnPage} from '../show/show-contacts-on-page';

let deleteContactKey = document.getElementById('contact_key_for_delete_id');

export function handelDeleteContact(){
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
        showContactsOnPage(contacts);
    })
    .catch((err) => {
        console.log('AHTUNG! При удалении контакта сервер вернул какую-то ошибку', err);
    });
}