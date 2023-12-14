// Importing the 'express' module to create a web server.
const express = require("express");

// Creating an Express application.
const app = express();

// Defining a route for handling GET requests to the "/ping" endpoint.
app.get("/ping", (req, res) => {
    // Sending the response "Hello World" for GET requests to "/ping".
    res.send("Hello");
});

// Starting the web server on port 3000 and logging a message when the server starts.
app.listen(3000, () => {
    console.log("Server Started");
});
