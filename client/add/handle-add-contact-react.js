export function handelAddContactReact(newContactObject){
    fetch("./contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ //При добавлении реакта это надо будет переделать
            firstName: newContactObject['firstName'],
            lastName: newContactObject['lastName'],
            phoneNumber: newContactObject['phoneNumber'],
            age: newContactObject['age'],
            address: newContactObject['address']
        })
    })
        .then((response) => {
            console.log("Смотрим как выглядит респонс на добавление контакта:", response);
            return response.json();
        })
        .then((json) => {
            console.log("Parsed json:", json);
            return json;
        })
        .then((myContacts) => {
            console.log("Зашли в then, который рисует конакты");
            console.log("Смотрим тип контактов: ", typeof(myContacts));
            this.setState({contacts: myContacts});
        })
        .catch((err) => {
            console.log("AHTUNG! При добавлении контакта сервер вернул какую-то ошибку", err);
        });
}