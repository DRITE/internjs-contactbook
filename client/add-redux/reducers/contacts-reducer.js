import {ADD_CONTACT, REQUEST_CONTACTS, RECEIVE_CONTACTS, FETCH_CONTACTS} from '../actions/action-types';

const initialState = {
    contacts: []
};

export function fetchContactsReducer(state = initialState, action) {
    console.log('action', action);//TODO Проблема. Написать редюсер на запорс контактов с сервера
    switch (action.type) {
        case RECEIVE_CONTACTS:
            return {contacts: action.contacts};
        default:
            return state;
    }
};




