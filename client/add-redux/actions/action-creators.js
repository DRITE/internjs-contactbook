import { ADD_CONTACT, DELETE_CONTACT, SHOW_CONTACTS, REQUEST_CONTACTS, RECEIVE_CONTACTS} from "./action-types";

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
    return {
        type: REQUEST_CONTACTS,
    }
}
export function receiveContacts(json) {
    return {
        type: RECEIVE_CONTACTS,
        contacts: json,
    }
}
//ассинхронный генератор
export function fetchContacts() {
    return function (dispatch) {
        dispatch(requestContacts())
        return fetch('/contacts ')
            .then(response => response.json())
            .then(json =>
                dispatch(receiveContacts(json))
            )
    }
}