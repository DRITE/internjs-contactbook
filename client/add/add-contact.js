import {myContacts} from "../index";

export function addContact(/*newName, newSecondName*/ values) {
    //myContacts.push({name: newName, surname: newSecondName});
    console.log('Вызвана функция addContact для values:', values);
    //myContacts.push({values});
    // let newContact;
    // console.log('смотрим какие ключи есть в values:', values.keys);
    // for(let i in values.keys){
    //     console.log('мы в цикле. i= ', i);  
    //     newContact = {
    //         i: values[i]
    //     }
    // }
    // console.log('создан объект newContact', newContact);
    // console.log(typeof(newContact));
    let newKey = myContacts.length;
    values.key = newKey;
    myContacts.push(values);
    console.log(myContacts);
}