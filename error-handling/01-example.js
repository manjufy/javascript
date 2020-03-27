const express = require('express');
const app = express();
app.get('/', handler);
app.listen(3002);

async function handler(req, res) {
    await wait(1000);
    res.send('Hello word');
}

function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}