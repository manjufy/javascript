const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const line = input.split(' ');
    const a = parseInt(line[0]);
    const b = parseInt(line[1]);
    console.log(a + b);
    process.exit();
})