const express = require("express");
const app = express();

// Middleware function: myLogger
const myLogger = function (req, res, next) {
    console.log("Logged");
    next();
};

// Middleware function: requestTime
const requestTime = function (req, res, next) {
    req.reqTime = Date.now();
    next();
};

// Using myLogger middleware globally for all routes
app.use(myLogger);

// Using requestTime middleware globally for all routes
app.use(requestTime);

// Route handling for the root path '/'
app.get('/', function (req, res) {
    // Sending a response that includes the request time set by requestTime middleware
    res.send(`Current Time: ${req.reqTime}`);
});

// Starting the Express application on port 3000
app.listen(3000, () => console.log("Application Started"));
