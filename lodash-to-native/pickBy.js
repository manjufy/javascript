const schema = {
    name: {},
    age: 0,
    address: '',
    phone_no: '',
    active: false,
    accounts: [{
        id: 1
    }]
}

const params = {
    name: 'Manjunath',
    age: 30,
    phone_no: null,
    active: true,
    accounts: [{
        id: 1
    }]
}

function pickBy(object) {
	const obj = {};
	for(const key in object) {
		if (schema.hasOwnProperty(key)) {
			obj[key] = object[key];
		}
	}

	return obj;
}

console.log(pickBy(params));