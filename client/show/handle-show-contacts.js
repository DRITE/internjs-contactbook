export let showContactsButton = document.getElementById('show_contact_button_id');
showContactsButton.addEventListener('click', handleShowContacts);

function handleShowContacts() {
    fetch('/contacts')
    .then((response) =>{
        console.log('Смотрим как выглядит респонс на показ контактов:', response);
        return response.json();
    })
    .then((json) => {
        console.log('Parsed json:', json);
    })
    .catch((err) => {
        console.log('AHTUNG! При показе контактов сервер матерится:', err);
    })
}