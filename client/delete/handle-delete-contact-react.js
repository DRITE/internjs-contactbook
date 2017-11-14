export function handelDeleteContactReact(key) {
    console.log('Пришёл аргумент key = ', key);
    fetch('./contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ //При добавлении реакта это надо будет переделать
            key: key,
        })
    })
        .then((response) => {
            console.log('Смотрим как выглядит респонс на удаление контакта:', response);
            return response.json();
        })
        .then((json) => {
            console.log('Parsed json:', json);
            return json;
        })
        .then((myContacts) => {
            console.log('Зашли в then, который рисует конакты');
            console.log('Смотрим тип контактов: ', typeof(myContacts));
            this.setState({
                contacts: myContacts,
            })
        })
        .catch((err) => {
            console.log('AHTUNG! При удалении контакта сервер вернул какую-то ошибку', err);
        });
}