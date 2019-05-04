const name = 'Manjunath Reddy'
let reverse = ''

for(i = name.length - 1; i >= 0; i--) {
    reverse = reverse + name[i];
}

console.log('Reversed name', reverse)