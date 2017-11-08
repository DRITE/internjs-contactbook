let rootElement = document.getElementById('root');

//Добавлять элемент rootElement.appendChild(elem)

// function showContactsOnPage(contacts) {
//     for (var key in contacts) {
//         if (object.hasOwnProperty(key)) {
//             var element = contacts[key];
            
//         }
//     }
// }
export function showContactOnPage(contact) {
    console.log('Зашли в showContactOnPage, рисуем', contact);
    var div = document.createElement('div');
    let s;
    var h3 = document.createElement('h3');
    for (var key in contact) {
        console.log('Пытаемся нарисовать элемент: ', contact[key]);
        //s.contact(" " + contact[key]);
        s = s + " " + contact[key];
    }
    h3.innerHTML = s;
    div.appendChild(h3);
    rootElement.appendChild(div);
}