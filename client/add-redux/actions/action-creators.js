import {
    ADD_CONTACT, DELETE_CONTACT, SHOW_CONTACTS, REQUEST_CONTACTS, RECEIVE_CONTACTS,
    FETCH_CONTACTS
} from "./action-types";
import {handleShowContactsRedux} from "../../show/handle-show-contacts-redux";
import {dispatch} from "redux";

export function addContact(contact) {
    return {
        type: ADD_CONTACT,
        contact
    }
}

export function deleteContact(contactId) {
    return {
        type: DELETE_CONTACT,
        contactId
    }
}

// export function showContacts() {
//     return {
//         type: SHOW_CONTACTS,
//
//     }
// }

export function requestContacts() {
    console.log('Вообще-то зашли в requestContacts');
    return {
        type: REQUEST_CONTACTS,
        contacts: handleShowContactsRedux(),
    }
}
export function receiveContacts(json) {
    console.log(' зашли receiveContacts: ', json);
    return {
        type: RECEIVE_CONTACTS,
        contacts: json
    }
}
//ассинхронный генератор
export function fetchContacts() {
    return function (dispatch) {
        return fetch('/contacts ')
            .then(response => response.json())
            .then(json => {
                    console.log("Смотрим, что мы тут зафечили: ", json);
                    dispatch(receiveContacts(json))
            })

    }
}


// export function fetchContacts() {
//     console.log(' зашли fetchContacts');
//     return {
//         type: FETCH_CONTACTS,
//         contacts: receiveContacts(requestContacts()),
//     }
// }