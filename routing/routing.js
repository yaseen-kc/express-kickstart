// Importing the 'express' module for creating a web server.
const express = require("express");

// Creating an Express application.
const app = express();

// Setting the port number for the server.
const PORT = 3000;

// Sample data for demonstration.
const data = {
    id: 1,
    name: "india"
};

// Handling GET requests to the root ('/') endpoint.
app.get('/', (req, res) => {
    res.end("Home Page");
});

// Handling GET requests to the '/about' endpoint.
app.get('/about', (req, res) => {
    res.send("About Page");
});

// Handling GET requests to the '/contact' endpoint.
app.get('/contact', (req, res) => {
    res.send("Contact Page");
});

// Handling GET requests to the '/data' endpoint.
app.get('/data', (req, res) => {
    res.send(data);
});

// Handling GET requests to the '/JSON' endpoint.
app.get('/JSON', (req, res) => {
    res.json(data);
});

// Handling GET requests to the '/file' endpoint and sending a file.
app.get('/file', (req, res) => {
    res.sendFile("C:/Users/ymkcm/OneDrive/Documents/GitHub/express-kickstart/routing/text.txt");
});

// Starting the web server on the specified port and logging a message when the server starts.
app.listen(PORT, () => {
    console.log("Server Started", PORT);
});
