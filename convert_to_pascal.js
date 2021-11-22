const arr = [{},{}]

for (const item of arr) {
    for (const [key, value] of Object.entries(item)) {
        delete item[key];
        item[snakeToPascal(key)] = value;
    }
}

console.log(arr)

function snakeToPascal(str) {
	const toCamel = str.replace( /([-_]\w)/g, g => g[ 1 ].toUpperCase());
	const toPascal = toCamel[ 0 ].toUpperCase() + toCamel.substr( 1 );

	return toPascal;
};