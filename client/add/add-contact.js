import {myContacts} from "../index";

export function addContact(newName, newSecondName) {
    myContacts.push({name: newName, surname: newSecondName});
}