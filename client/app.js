import {handleShowContacts} from './show/handle-show-contacts';
import {handelDeleteContact} from './delete/handle-delete-contact';
import {handelAddContact} from './add/handle-add-contact';

let showContactsButton = document.getElementById('show_contact_button_id');
showContactsButton.addEventListener('click', handleShowContacts);

let deleteContactButton = document.getElementById('delete_contact_button_id');
deleteContactButton.addEventListener('click', handelDeleteContact);

let addContactButton = document.getElementById('add_contact_button');
addContactButton.addEventListener('click', handelAddContact);
