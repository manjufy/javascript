const schema = {
    name: {},
    age: 0,
    address: '',
    phone_no: '',
}

const params = {
    name: 'Manjunath',
    age: 30
}

function pickBy(object) {
	const obj = {};
	for(const key in object) {
		if (schema[key]) {
			obj[key] = object[key];
		}
	}

	return obj;
}

console.log(pickBy(params));