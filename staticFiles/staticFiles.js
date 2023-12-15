// Importing the 'express' and 'path' modules for creating a web server and managing file paths.
const express = require("express");
const path = require("path");

// Creating an Express application.
const app = express();

// Resolving the absolute path for the 'staticFiles' directory.
const publicPath = path.resolve(__dirname, 'staticFiles');

// Serving static files from the 'static' directory under the '/staticFiles' route.
app.use('/staticFiles', express.static('static'));

// HTML code with an image tag referencing an image from the 'staticFiles' directory.
const htmlContent = '<img src="/staticFiles/img_girl.jpg" ></img>';

// Handling GET requests to the root ('/') endpoint.
app.get('/', function (req, res) {
    // Sending a response with the message "Static Files" and the HTML content.
    res.send(`Static Files<br>${htmlContent}`);
});

// Starting the web server on port 3000 and logging a message when the server starts.
app.listen(3000, () => console.log("App Started"));
