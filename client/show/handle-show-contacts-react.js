
export function handleShowContactsReact() {
    fetch('/contacts')
        .then((response) => {
            console.log('Смотрим как выглядит респонс на показ контактов:', response);
            return response.json();
        })
        .then((json) => {
            console.log('Parsed json:', json);
            //console.log('Смотрим тип распарсенного ответа', typeof(json));
            return json;
        })
        .then((myContacts) => {
            this.setState({contacts: myContacts})
        })
        .catch((err) => {
            console.log('AHTUNG! При показе контактов сервер матерится:', err);
        })
}