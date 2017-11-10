import {showContactOnPage} from './show-contact';
import {clearRootElement} from './show-contact';
export function showContactsOnPage(contacts){
    console.log('Зашли в showContactsOnPage, который рисует конакты');
    clearRootElement();
    for (var key in contacts) {
        console.log('Текущий ключ: ', key);
        console.log('Значение по этому ключу: ', contacts[key]);
        showContactOnPage(contacts[key]);
    }
}