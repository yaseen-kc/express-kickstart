const express = require("express");
const fs = require("fs");

let app = express();
let movies = JSON.parse(fs.readFileSync('./data/movies.json'));

fs

app.get('/api/v1/movies', (req, res) => {
    res.status(200).json(movies)
})

const port = 3000;
app.listen(port, () => {
    console.log("Server Has Started");
})
