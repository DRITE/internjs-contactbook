let rootElement = document.getElementById('root');

export function showContactOnPage(contact) {
    console.log('Зашли в showContactOnPage, рисуем', contact);
    var div = document.createElement('div');
    let s = '|| ';
    var h3 = document.createElement('h3');
    for (var key in contact) {
        console.log('Пытаемся нарисовать элемент: ', contact[key]);
        //s.contact(" " + contact[key]);
        s = s + key +": " + contact[key] + " ||  ";
    }
    h3.innerHTML = s;
    div.appendChild(h3);
    rootElement.appendChild(div);
}

export function clearRootElement() {
    rootElement.innerHTML = '';
}