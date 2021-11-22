let items = [];
items.length = 300;
let count= 0;
const start = 'A0001';
for (const item of items) {
    ++count;
    let range = start.substring(0, start.length - 2);
    if (count < 10) {
        range = start.substring(0, start.length - 1);
    } else if (count > 99) {
        range = start.substring(0, start.length - 3);
    }

    const lotNumber = range + count;
    console.log(lotNumber);
}