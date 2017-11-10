var myContacts = require('../contacts-storage');
var deleteContactByKey = function (keyForDelete) {
    console.log('Удаляем контакт с ключом: ', keyForDelete);
    let requiredIndex = findWithAttr(myContacts, 'key', keyForDelete); //Потом я Это перепишу с методом Array.prototype.findIndex()
    console.log('И с индексом: ', requiredIndex);
    if (requiredIndex > -1 && myContacts.splice(requiredIndex, 1)) {
        return true;
    } else {
        console.log('deleteContactByKey returns false');
        return false;
    }
};

module.exports = deleteContactByKey;

function findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
            return i;
        }
    }
    return -1;
};


