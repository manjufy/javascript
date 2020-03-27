/**
 * Throws
 * (node:17661) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: Hang!
(node:17661) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

 */
const express = require('express');
const app = express();
app.get('/', handler);
app.listen(3002);

async function handler(req, res) {
    throw new Error('Hang!')
}

function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}