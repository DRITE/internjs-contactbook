export let deleteContactButton = document.getElementById('delete_contact_button_id');
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
    })
    .catch((err) => {
        console.log('AHTUNG! При удалении контакта сервер вернул какую-то ошибку', err);
    });
}