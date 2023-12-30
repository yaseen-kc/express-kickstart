const express = require('express');
const app = express();

app.get('/path', (req, res) => {
    res.send('Hello, World!');
});