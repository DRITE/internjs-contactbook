export default function findContact (array, query) {
	if (query === "") {
		return "Ошибка ввода";
	}
	let results = [];
	for (let i = 0; i < array.length; i++) {
		let currentObject = array[i];
		for (let key in currentObject){
			if (currentObject[key].toLowerCase().indexOf(query.toLowerCase()) > -1) {
				console.log(currentObject.name + " " + currentObject.surname);
				results.push(currentObject);
				break;
			}
		}
	}
	if (results.length === 0) {
		return "Элементы не найдены";
	} else {
		console.log("Найдено объектов: " + results.length);
		return results;
	}

}