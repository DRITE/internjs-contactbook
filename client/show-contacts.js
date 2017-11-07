//import {myContacts} from "./index.js";
//let myContacts = require("./index");
export default function printContacts(){
    //console.log(myContacts);
    fetch('/contacts')
    .then( (res) => {
        return res.json;
    })
    .then((result) =>{
        newState(result);///должен задавать новое состояние таблице
    })
    .catch((err) => {
        console.log('В fetch на показ контактов попали в catch', err);
    });
}




