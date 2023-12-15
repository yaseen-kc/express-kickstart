// Importing the 'express' module for creating a web server.
const express = require("express");

// Creating an Express application.
const app = express();

// Setting the port number for the server.
const PORT = 3000;

// Configuring the view engine to use 'pug'.
app.set('view engine', 'pug');

// Handling GET requests to the root ('/') endpoint and rendering the 'index' view.
app.get('/', function (req, res) {
    res.render('index', { title: "Express View Engine" });
}).listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
