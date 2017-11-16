import { ADD_CONTACT } from '../actions/action-types';
import { fetchContacts } from "../actions/action-creators";

const initialState = {
    contacts: []
}

export function showContacts(state = initialState, action) { //TODO Проблема. Написать редюсер на запорс контактов с сервера
    switch (action.type) {
        case ADD_CONTACT:
            return Object.assign({}, state, {
                contacts: [...state.contacts, action.contact]
            });
        default:
            return state;
    }
}

