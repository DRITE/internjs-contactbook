import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import 'antd/dist/antd.css';
import { App } from './react_components/App.jsx';
import {handleShowContacts} from './show/handle-show-contacts';
import {handelDeleteContact} from './delete/handle-delete-contact';
import {handelAddContact} from './add/handle-add-contact';

// let showContactsButton = document.getElementById('show_contact_button_id');
// showContactsButton.addEventListener('click', handleShowContacts);

// let deleteContactButton = document.getElementById('delete_contact_button_id');
// deleteContactButton.addEventListener('click', handelDeleteContact);

// let addContactButton = document.getElementById('add_contact_button');
// addContactButton.addEventListener('click', handelAddContact);

ReactDOM.render(
    <LocaleProvider locale={enUS}>
        <App />
    </LocaleProvider>,
    document.getElementById('root')
);